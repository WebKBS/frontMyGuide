---
description: 사이드 메뉴 여닫을때 window가 상단으로 올라가는것을 방지 하는 방법
---

# 사이드 메뉴 열고 닫을때 body hidden

```javascript
let scrollY;
/**
 * 메뉴 오픈시 바디 스크롤 멈춤
 */
function stopBodyScroll() {
    scrollY = window.scrollY;
    document.querySelector('html').classList.add('on');
    document.body.classList.add('on');
    document.body.scrollTop = scrollY;
}

/**
* 메뉴 오픈시 바디 스크롤 활성화
*/
function playBodyScroll() {
    document.querySelector('html').classList.remove('on');
    document.body.classList.remove('on');
    window.scrollTo(0, scrollY);
}
```
