---
description: 자바스크립트로 카운터 수치 올라가는 애니메이션 구현
---

# JS 카운터 애니메이션 만들기

### HTML

```html
<span class="count" id="num1">0</span>
<span class="count" id="num2">0</span>
```

CSS는 생략하겠다.



### Javascript

```javascript
const counter = (count, max) => {
    let now = max;

    const handle = setInterval(() => {
        // html에 그려주고, 100단위부터 ,를 찍어준다.
        count.innerHTML = Math.ceil(max - now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // 최대 도착후 정지
        if (now < 1) {
            clearInterval(handle);
        }
       console.log(now)

        // 증가값이 커질수록 속도가 느려짐
        const step = now / 10;
        
        //now의 최대값이 줄어듦과 동시에 10분의 1인 step의 값을 뺀다.
        now -= step;
    }, 40);
}

window.addEventListener('load', () => {
    // 카운트를 적용시킬 요소
    const counter1 = document.getElementById("num1");
    const counter2 = document.getElementById("num2");

    // Max 수치
    const Max1 = 12162;
    const Max2 = 13242;

    setTimeout(() => counter(counter1, Max1), 500);
    setTimeout(() => counter(counter2, Max2), 500);
})
```

{% embed url="https://codepen.io/publisherkang/pen/yLqJoYO" %}
