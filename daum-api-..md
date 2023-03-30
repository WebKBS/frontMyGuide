---
description: 다음 주소 api 사용하기.
---

# daum 주소 api 사용 방법.

버튼이 있다고 가정하고.\
다음 주소api를 사용하여 버튼릭시 user에게 자신의 주소를 입력하는 방법이다.

### HTML

```html
<!-- 헤더 script태그에 추가 -->
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<button type="button" class="find_btn btn2" id="findMap">주소 찾기</button>
<input type="text" placeholder="우편번호" disabled id="zipCode" />
<input type="text" placeholder="주소" disabled id="address" />
```

### Javascript

```javascript
const mapBtn = document.getElementById('findMap'); // 버튼 선택

mapBtn.addEventListener('click', findMapHandler); // 버튼 클릭시 이벤트

function findMapHandler() {
    new daum.Postcode({
        oncomplete: function (data) {

            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                console.log(data);
                document.getElementById('zipCode').value = data.zonecode; // 우편번호
                document.getElementById('address').value = data.roadAddress; // 도로명주소

            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                document.getElementById('zipCode').value = data.zonecode; // 우편번호
                document.getElementById('address').value = data.jibunAddress; // 지번주소
            }
        }
    }).open();
}
```



간단하다.

console.log(data)를 해보면 여러정보가 나오니, 응용해서 사용하면 된다.



자세한 세부 내용은 공식 홈페이지에서 공부!

{% embed url="https://postcode.map.daum.net/guide" %}
