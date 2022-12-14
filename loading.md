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
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" background: rgba(97, 97, 97, 0); display: block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="75" cy="50" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.9166666666666666s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.9166666666666666s"></animate>
    </circle><circle cx="71.65063509461098" cy="62.5" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.8333333333333334s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.8333333333333334s"></animate>
    </circle><circle cx="62.5" cy="71.65063509461096" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.75s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.75s"></animate>
    </circle><circle cx="50" cy="75" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.6666666666666666s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.6666666666666666s"></animate>
    </circle><circle cx="37.50000000000001" cy="71.65063509461098" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5833333333333334s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5833333333333334s"></animate>
    </circle><circle cx="28.34936490538903" cy="62.5" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.5s"></animate>
    </circle><circle cx="25" cy="50" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.4166666666666667s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.4166666666666667s"></animate>
    </circle><circle cx="28.34936490538903" cy="37.50000000000001" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.3333333333333333s"></animate>
    </circle><circle cx="37.499999999999986" cy="28.349364905389038" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.25s"></animate>
    </circle><circle cx="49.99999999999999" cy="25" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.16666666666666666s"></animate>
    </circle><circle cx="62.5" cy="28.349364905389034" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.08333333333333333s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="-0.08333333333333333s"></animate>
    </circle><circle cx="71.65063509461096" cy="37.499999999999986" fill="#97f0ff" r="5">
      <animate attributeName="r" values="3;3;5;3;3" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s"></animate>
      <animate attributeName="fill" values="#97f0ff;#97f0ff;#fffb10;#97f0ff;#97f0ff" repeatCount="indefinite" times="0;0.1;0.2;0.3;1" dur="1s" begin="0s"></animate>
    </circle>
    </svg>
    <p id="LoadingText"></p>
  </div>`;

    if (document.getElementById('loading')) return;
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
    AddElement();
    document.getElementById('loading').style.cssText = `
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
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

    if (text === null) (document.getElementById('LoadingText').textContent = '')
    else (document.getElementById('LoadingText').textContent = text);
}
// 파라미터로 텍스트가 없으면 텍스트를 내보내지 않는다.
```

### 종료 함수

```javascript
function UnLoadingScreen() {
    document.getElementById('loading').remove();
}
```

간단하게로딩 모달 만들기 끝!



{% file src=".gitbook/assets/LoadingScreen.js" %}
