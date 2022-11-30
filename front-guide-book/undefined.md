# 비밀번호 표시

## 비밀번호 눈동자 표시 하는 방법

* 버튼 엘리먼트에 data-eye 추가.

#### HTML

<pre class="language-html"><code class="lang-html">&#x3C;input type="password" id="pw" placeholder="영문, 숫자, 특수문자 조합 8~16자리" />
<strong>&#x3C;button type="button" class="view_btn" data-eye> &#x3C;!-- data-eye 이벤트를 불러올속성-->
</strong>    &#x3C;img src="~/images/icons/eye_close.svg" class="close" alt="비밀번호 가리기"/>
    &#x3C;img src="~/images/icons/eye_open.svg" class="open" alt="비밀번호 보기"/>
&#x3C;/button>

&#x3C;input type="password" id="rePw" placeholder="비밀번호 재입력" />
&#x3C;button type="button" class="view_btn" data-eye> &#x3C;!-- data-eye 이벤트를 불러올속성-->
    &#x3C;img src="~/images/icons/eye_close.svg" class="close" alt="비밀번호 보지않기" />
    &#x3C;img src="~/images/icons/eye_open.svg" class="open" alt="비밀번호 보기" />
&#x3C;/button></code></pre>

#### SCSS

```scss
.view_btn {
    width: 20px;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);

    &.on {
        .close {
            display: none;
        }

        .open {
            display: block;
        }
    }
}

.open{
    display: none;
}

img {
    width: 20px;
}
```

#### JavaScript

```javascript
/* 비밀번호 눈동자 공통 */
/* common에 추가하여*모든 페이지 제어가 가능하다.*/

const eyeBtnAll = document.querySelectorAll('[data-eye]'); //선택자

const viewPassword = (target) => {
    target.classList.toggle('on');
    if (target.previousElementSibling.attributes[0].value === "password") {
        target.previousElementSibling.setAttribute('type', "text");
    } else {
        target.previousElementSibling.setAttribute('type', "password");
    }
}

// 이벤트 리스너 반복문
eyeBtnAll.forEach(eyeBtn => {
    eyeBtn.addEventListener('click', () => {
        viewPassword(eyeBtn);
    })
})

```
