---
description: 로딩 애니메이션 구현
---

# Loading 모달 만들기

우선 엘리먼트를 생성해 콜백에 들어갈 함수를 만들어준다.

append 사용시 중복 생성이 있어서 HTML코드를 바로 삽입하는 방법을 사용했다.

백틱 기호로 엘리먼트를 바로 만들고 insertAdjacentHTML를 사용해 Body 최 하단에 위치시켰다.

이미지 대신에 SVG 사용. SVG엘리먼트에 이미지 태그를 사용해도 무관.

```javascript
function AddElement() {
  const Element = `
  <div class="loading" id="loading">
    <svg></svg> 
    <p id="LoadingText"></p>
  </div>`;
  //svg를 추가해줬다. 이미지를 추가해도 된다.
  //p 태그는 텍스트 입력을 위해 추가했다.

  return document.body.insertAdjacentHTML('beforeend', Element);
  // insertAdjacentHTML 메서드를 통해 body 최 하단에 위치 시킨다.
}
```

DOMContentLoaded를 사용해서 윈도우가 열릴때 엘리먼트를 삽입해준다.

<pre class="language-javascript"><code class="lang-javascript"><strong>window.addEventListener('DOMContentLoaded', AddElement);
</strong></code></pre>



이제 실행 함수를 만들어보자.

실행함수가 있으면 종료 함수도 있어야한다.



실행 함수

```javascript
function LoadingScreen(text = null) {
  document.getElementById('loading').classList.add('show');
  return text === null ? (document.getElementById('LoadingText').textContent = '') : (document.getElementById('LoadingText').textContent = text);
}
// 파라미터로 텍스트가 없으면 텍스트를 내보내지 않는다.
```

종료 함수

```javascript
function UnLoadingScreen() {
  document.getElementById('loading').classList.remove('show');
  document.getElementById('LoadingText').textContent = '';
}
```

간단하게로딩 모달 만들기 끝!

{% file src=".gitbook/assets/LoadingScreen.css" %}

{% file src=".gitbook/assets/LoadingScreen.js" %}
