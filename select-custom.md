---
description: select태그 자바스크립트로 이미지 넣는 방법
---

# Select Custom

HTML에서 Select 태그를 직접 구현하는 방법이다.



### HTML

```html
<div class="box">
    <div class="select_list">
        <div class="select_wrap default">
            <button type="button" id="selectChain">
                <!-- 이미지 들어올곳 -->
                <img src="" />
                <!-- 기본 셀렉 메세지 보이는곳-->
                <span class="select">Default Select Message</span>
            </button>
        </div>
        <!-- 셀렉트 리스트-->
        <ul class="chain_list">
            <li>
                <button type="button">
                    <img src="이미지 주소" alt="ethereum" />
                    <span class="select">Ethereum</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <img src="이미지 주소" alt="polygon" />
                    <span class="select">Polygon</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <img src="이미지 주소" alt="bsc" />
                    <span class="select">Bsc</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <img src="이미지 주소" alt="klaytn" />
                    <span class="select">Klaytn</span>
                </button>
            </li>
        </ul>
    </div>
</div>
```



### CSS

```scss
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box{
  width: 100vw;
  height: 100vh;
}
#selectChain {
  width: 100%;
  padding: 7px 24px 7px 14px;
  height: 100%;
  text-align: left;
  display: flex;
  gap: 4px;
  align-items: center;

  img {
    display: none;
    width: auto;
    height: 24px;
  }
}

.box{max-width: 300px;}
.select_list {
  position: relative;
  height: 40px;

  ul {
    display: none;
    width: 100%;
    flex-direction: column;
    background: #000;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .6);
    overflow: hidden;
    position: absolute;
    top: 40px;
    left: 0;
    max-height: 164px;
    overflow-y: auto;

    &.on {
      display: flex;
    }
  }

  li {
    width: 100%;

    button {
      width: 100%;
      display: flex;
      padding: 8px 14px;
      align-items: center;
      gap: 6px;

      &:hover {
        background: greenyellow;
      }
    }

    img {
      width: auto;
      height: 24px;
    }
  }
}

```



### Javascript

```javascript
const chainSelectBtn = document.getElementById('selectChain');

chainSelectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu(e);
});

const removeClassSelectList = () => {
    document.querySelectorAll('.select_list > ul').forEach(ev => {
        ev.classList.remove('on');
    })
}

// select 열기
const openMenu = (event) => {
    const target = event.currentTarget;
    const nextElement = target.parentElement.nextElementSibling;

    removeClassSelectList();

    nextElement.classList.add('on');
}

// select 닫기
document.body.addEventListener('click', (e) => {
    const target = e.target;
    const isSelect = target.classList.contains('select_list') || target.closest('.select_list');

    if (isSelect) return;
    removeClassSelectList();
})

document.querySelectorAll('.chain_list li button').forEach(ev => {
    ev.addEventListener('click', (e) => {
        removeClassSelectList();
        chainSelectBtn.querySelector('.select').textContent = ev.children[1].textContent;
      chainSelectBtn.querySelector('img').src = ev.children[0].src;
      chainSelectBtn.querySelector('img').style.display = "block";
        document.querySelector('.select_wrap').classList.remove('default');
        chainSelectBtn.dataset.select = true;
    })
})

```



ex..... 뭔가 깔끔히 정리할 필요가 있어보인다..

{% embed url="https://codepen.io/publisherkang/pen/MWPgVPG" %}
