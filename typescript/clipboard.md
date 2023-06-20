---
description: 타입스크립트로 input 텍스트 clipboard로 복사하는 방법
---

# clipboard

### HTML

```html
<input type="text" id="copyText" value="안녕하세요" readonly/>
<button type="button" id="copyBtn">Copy</button>
```

### Typescript

<pre class="language-typescript"><code class="lang-typescript">let messageTimer: number;

<strong>function copyText() {
</strong><strong>    // 선택자
</strong>    const input = document.getElementById("copyText") as HTMLInputElement;

    /* 텍스트 복사하기 */
    navigator.clipboard.writeText(input.value)
        .then(() => {
            // 복사 성공 메시지 표시 
            const copyMessage = document.getElementById("copyMessage");
            showMessage(copyMessage, "Referral code copied.");
        })
        .catch((error) => {
            // 복사 실패 메시지 표시 
            const copyMessage = document.getElementById("copyMessage");
            showMessage(copyMessage, "Copy failed.");
        });
}

function showMessage(element: HTMLElement, message: string) {
    // 이전의 타이머 핸들을 제거하여 중복 실행 방지
    clearTimeout(messageTimer);

    element.classList.add("on");
    element.textContent = message;

    // 3초 후에 메시지 삭제 
    messageTimer = setTimeout(() => {
        element.classList.remove("on");
        element.textContent = "";
    }, 2000);
}

document.getElementById("copyBtn").addEventListener("click", copyText);
</code></pre>
