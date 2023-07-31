---
description: 로딩 애니메이션 구현
---

# Loading 모달 만들기

우선 엘리먼트를 생성해 콜백에 들어갈 함수를 만들어준다.

append 사용시 중복 생성이 있어서 HTML코드를 바로 삽입하는 방법을 사용했다.

백틱 기호로 엘리먼트를 바로 만들고 insertAdjacentHTML를 사용해 Body 최 하단에 위치시켰다.



```javascript
function AddElement() {
   const Element = `
  <div class="loading" id="loading">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#14D2CC" stroke="none">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
      </path>
    </svg>
    <p id="LoadingText"></p>
  </div>`;

  return document.body.insertAdjacentHTML('beforeend', Element);
}

```



이제 실행 함수를 만들어보자.

실행함수가 있으면 종료 함수도 있어야한다.



### 실행 함수

파라미터로 text = null 기본값을 만들고 텍스트가 있으면 넣어주고 없으면 보여주지 않는다.

css 파일을 따로 만들지 않기위해 cssText 매서드를 사용해서 직접 css를 넣어줬다.

```javascript
function LoadingScreen(text = null) {
  if (document.getElementById('loading')) return; // id가 없으면 리턴

  AddElement();
  document.getElementById('loading').style.cssText = `
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;
    background: rgba(0,0,0, .7);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    `;
  document.querySelector('#loading svg').style.cssText = `
    width: 154px;
    height: 154px;
    `;
  document.getElementById('LoadingText').style.cssText = `
    color: #fff;
    font-size: 1.2rem;
    font-family: inherit;
    white-space: pre;
    text-align: center;
    line-height: 1.5;

    `;

  if (text === null) document.getElementById('LoadingText').textContent = '';
  else document.getElementById('LoadingText').textContent = text;
}
// 파라미터로 텍스트가 없으면 텍스트를 내보내지 않는다.
```

### 종료 함수

```javascript
function UnLoadingScreen() {
    if (document.getElementById('loading')) document.getElementById('loading').remove();
}
```

\
&#x20;Loading 아이디가 존재하면 실행하고 없으면 실행하지 않는 조건문 추가

{% file src=".gitbook/assets/LoadingScreen.js" %}
