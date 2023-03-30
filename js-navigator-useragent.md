---
description: 모바일과 크롬에서 링크 이동시, 이동을 막는 방법
---

# JS 크롬,모바일 감지 navigator userAgent

간혹 기기나 브라우저 마다 링크 이동을 제어 해야할 상황이 있다.

이 방법은 모바일 브라우저 일때와, 크롬 브라우저가 아니면 링크 이동을 막는 방법이다.

* 모바일브라우저와 크롬 브라우저가 아니라면 경고창이 뜨면서 링크 이동을 막는다.
* 확인은 모바일 브라우저의 상태와 크롬이 아닌 브라우저에서 확인해야한다.
* 단, 크롬 브라우저는 크로미움 기반 브라우저라서 크로미움 브라우저에서는 가능하다.

```javascript
/* 모바일 인지 아닌지 체크 / 크롬인지 아닌지 체크 */

const mobileCheck = document.querySelectorAll('[data-isMobile=""]');
// data-isMobile 선택자

// 크롬일 경우
let chromeReg = /Chrome/i
// 모바일일 경우
let mobileReg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

const checkEventListener = (e) => {

    if (mobileReg.test(navigator.userAgent)) {
        Swal.fire({ //sweetAlert2 라이브러리
            icon: "error",
            text: "Only available on PC",
        });
        e.preventDefault();
        return;
    } else if (!chromeReg.test(navigator.userAgent)) {
        Swal.fire({ //sweetAlert2 라이브러리
            icon: "error",
            text: "Please use the Chrome browser.",
        });
        e.preventDefault();
        return;
    }

}
for (mobile of mobileCheck) {
    mobile.addEventListener('click', checkEventListener);
}
```

A 태그나, Button 태그에 data-isMobile만 넣어주면 이동을 막는다.

```html
<a href="주소" data-isMobile>이동</a>
```

{% embed url="https://codepen.io/publisherkang/pen/bGjjzqx" %}
