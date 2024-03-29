---
description: pathname을 사용한 네비게이션 active
---

# JS window pathname 사용

javascript를 사용해서 window pathname이 변화함에라따

네비게이션 a href를 매칭시키는 방법.



javascript로 pathname을 가져와서 split을 한뒤,

a태그의 href의 주소를 매칭시킨다.

### HTML 예시.

```html
<nav>
    <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading">Menu</li>
        <li>
            <a href="/Home/Index">
                <i class="metismenu-icon pe-7s-graph"></i>
                통계
            </a>
        </li>
        <li>
            <a href="/Member/Member">
                <i class="metismenu-icon pe-7s-id"></i>
                회원
            </a>
        </li>
        <li>
            <a href="/Content/Content">
                <i class="metismenu-icon pe-7s-plugin"></i>
                콘텐츠
            </a>
        </li>
    </ul>
</nav>
```



### Javascript

```javascript
 window.addEventListener('DOMContentLoaded', () => {
    const naviElement = document.querySelectorAll('.vertical-nav-menu li a');
    const windowPathName = window.location.pathname.toLowerCase().split("/")[1];
    
    naviElement.forEach(ev => {
        if (ev.pathname.toLowerCase().indexOf(windowPathName) === 1) {
            ev.classList.add('mm-active');
        }
    })
})
```



### 설명

```javascript
window.addEventListener('DOMContentLoaded', () => {
    // 모든컨텐츠를 다운로드 받아야 함으로 필수!!
})
```

DOMContentLoaded는 모든 컨텐츠를 받고 실행해야 하므로 필수다.

```javascript
const naviElement = document.querySelectorAll('.vertical-nav-menu li a');
const windowPathName = window.location.pathname.toLowerCase().split("/")[1];
```

naviElement는 a태그 전체를 선택해 변수에 담아준다.

windowPathName 변수는 window.location.pathname을 가져온뒤

toLowerCase() 함수로 pathname을 모두 소문자로 만들어두고

split("/")을 사용하여 / 문자를 제거하고 배열로 만들어주고

배열이 된 pathname의 \[1] 두번째 index값을 windowPathName 변수에 저장한다.



```javascript
naviElement.forEach(ev => {
    if (ev.pathname.toLowerCase().indexOf(windowPathName) === 1) {
        ev.classList.add('mm-active');
    }
})
```

a링크 forEach로 반복문을 사용하고 pathname이 일치하는 조건문을 사용한다.

ev.pathname.toLowerCase().indexOf(windowPathName) === 1 조건은

a링크의 href의값 즉 pathname이

windowPathName의 변수에 저장된 값과

a의 pathname의 문자열 index값이 있으면 1을 반환하기에

조건을 만족하는 엘리먼트에 classList로 클래스를 추가해준다.\
\
생각보다 간단하다.

Spring, asp.net core 등 layout을 사용하는 html파일에 유용하게 쓸수있다.



### 매개 변수를 이용해서 쓰자.

```javascript
function linkMatchPathName(naviSelect) {
    const naviElement = document.querySelectorAll(naviSelect);
    const windowPathName = window.location.pathname.toLowerCase().split("/")[2];

    naviElement.forEach(ev => {
        ev.classList.remove('mm-active');
        if (ev.pathname.toLowerCase().split("/")[2] === windowPathName && ev.getAttribute("href") !== "#") {
            ev.classList.add('mm-active');
            ev.parentElement.classList.add('mm-active');
        }
    })
}
```





### Pathname 2개일때 앞부분만 잘라서 쓰기.

```javascript
﻿/** 
 * 
 * PathName에 맞춰 네비게이션 active 클래스 추가하는 함수
 
 * 
 * @param {string} naviSelect - 네비게이션 선택자
 * @param {string} windowTitle - 타이틀에서 빼고싶은 문자열
 * @param {string} printTitle - 출력하고싶은 타이틀
 * 
*/
function linkMatchPathName(naviSelect, windowTitle, printTitle) {
    const naviElement = document.querySelectorAll(naviSelect);
    const firstPath = window.location.pathname.toLowerCase().split("/")[1]
    const secondPath = window.location.pathname.toLowerCase().split("/")[2]
    const windowPathName = firstPath + '/' + secondPath;
    

    naviElement.forEach(ev => {
        ev.classList.remove('mm-active');
        const firstHref = ev.pathname.toLowerCase().split("/")[1];
        const secondHref = ev.pathname.toLowerCase().split("/")[2];
        const allHref = firstHref + '/' + secondHref;
        
        if (allHref === windowPathName && ev.getAttribute("href") !== "#") {
            ev.classList.add('mm-active');
            ev.parentElement.classList.add('mm-active')
            windowTitlePrint(windowTitle, printTitle);
        } else {
            windowTitlePrint(windowTitle, printTitle);
        }
    })
}


/**
 * document title 글자를 원하는 엘리먼트에 텍스트 추가하는 함수
 * @param {string} windowTitle - 타이틀에서 빼고싶은 문자열
 * @param {string} printTitle - 출력하고싶은 타이틀
 * 
 */
function windowTitlePrint(windowTitle ,printTitle) {
    const documentTitle = document.title.split(windowTitle).filter(remove => remove !== "");
    const title = document.querySelector(printTitle);
    title.textContent = documentTitle;
}
```

