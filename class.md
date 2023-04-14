---
description: javascript class문법을 사용해서 모달 열고 닫기 만드는 방법.
---

# 모달 열고 닫기 class 문법으로 만들기

function 함수 대신에 class 문법을 사용해서\
모달을 열고 닫는 방법을 만들어보자.



### HTML

```html
<button type="button" class="help_btn" data-target="infoModal">
    <img src="아이콘" alt="닫기버튼" />
</button>

<!-- 모달-->
<div class="modal" id="infoModal">
    <button class="close_btn"></button>
    <!-- 내용 -->
</div>


```

```javascript
export class Modal {
    /**
     * 모달 열고 닫기 class
     *
     * @param {any} openButtons - 열기 버튼
     * @param {any} modals - 대상 모달
     * @param {any} closeButtons - 닫기 버튼
     */
    constructor(openButtons, modals, closeButtons = "") {
        this.openButtons = document.querySelectorAll(openButtons);
        this.modals = document.querySelectorAll(modals);
        this.closeButtons = closeButtons;
    }

    /**
     * 모달 열기
     * */
    openModal() {
        this.openButtons.forEach(button => {
            button.addEventListener('click', (ev) => {
                ev.preventDefault();
                const target = button.dataset.target;
                const modal = document.querySelector(`#${target}`);
                modal.classList.toggle('on');
            });
        });
    }

    /**
     * 모달 닫기
     * */
    closeModal() {
        this.modals.forEach(modal => {
            modal.addEventListener('click', event => {

                if (event.target === modal || event.target.closest(this.closeButtons)) {
                    modal.classList.remove('on');
                }
            });
        });
    }
}

// 사용 클래스 이름을 전달. 1. 버튼, 2. 대상모달 3. 닫기버튼
const infoModal = new Modal('.help_btn', '.modal', '.close_btn')
infoModal.openModal();
infoModal.closeModal();
```

\
모달 여러개 생성시

new를 사용해서 매개변수로 클래스 이름만 넣어준다면,   각각 사용 가능하다.
