---
description: user 현재 위치 정보 설정하는 방법.
---

# 현재 위치 정보로 카카오 주소 api 사용

window geolocation api와 카카오 api를 사용해서\
현재 위치 정보를 통한 주소를 입력하는 방법이다.

### 우선 geolocation 사용 방법부터 알아보자.

```javascript
if ("geolocation" in navigator) { //Geolocation API 사용 가능 체크
   navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude; // 위도
        let longitude = position.coords.longitude; // 경도
        console.log("위도: " + latitude + ", 경도: " + longitude);
    });
} else {
    //Geolocation API 사용 불가능할 때
    alert("현재 디바이스는 현재위치 주소입력 사용 불가입니다.");
}
```

getCurrentPosition은 두가지 파라미터 함수를 받는다.

getCurrentPosition(성공시, 실패시);

성공시와 실패시 함수를 따로 만들어서 실행할 수도 있다.

이를 응용해서 다음과 같이 카카오 주소 api와 함께 사용해보자.



### 카카오 주소 api와 함께 사용

```javascript
function geoSuccess(position) {
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    const key = "카카오RESTAPI 키";

    console.log("위도: " + latitude, "경도: " + longitude);

    // x = 경도, y = 위도
    fetch(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`, {
        headers: {
            "Authorization": `KakaoAK ${key}`, // 카카오 rest api 키를 담은 변수
            "Content-Type": "application/json;charset=UTF-8",
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data) // 콘솔로 확인
            document.getElementById('zipCode').value = data.documents[0].road_address.zone_no; // 우편번호
            document.getElementById('address').value = data.documents[0].road_address.address_name; // 도로명 주소
        })
        .catch(e => console.log(e))
}

// 에러 메세지 함수. 위치 정보 설정을 하지 않았을때 경고창을 표시한다.
function geoError(error) {
    alert("위치 권한이 설정되어있지 않습니다. 주소 찾기를 이용해주세요.");
    console.log(error)
}

// 버튼 클릭시 이벤트
document.getElementById('locationBtn').addEventListener('click', () => {

    // geolocation 사용 가능 여부를 조건문으로 확인하여 사용 여부를 판단한다.
    if ("geolocation" in navigator) { // navigator.geolocation 으로 대체 가능
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        // Geolocation API 사용 불가능시 경고창
        alert("현재 디바이스는 현재위치 주소입력 사용 불가입니다. 주소 찾기를 이용해주세요.");
    }
})
```

### !!! 중요. 현재 모바일 웹 브라우저에서 사용자 위치 정보를 설정하게 만드는 것은 불가능하다. (모바일  위치기반이서비스는 네이티브 기술만 가능.)
