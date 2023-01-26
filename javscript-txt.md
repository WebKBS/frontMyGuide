---
description: txt파일을 불러와서 비속어 필터링을 만들어보자.
---

# Javscript 비속어 필터링 만들기 TXT파일

비속어 문자들이 담긴 txt 파일을 만들고.

txt 파일을 자바스크립트 XMLHttpRequest api를 사용해서 비속어 문자열을 감지하는 방법이다.



```javascript
let content = null;
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../폴더명/파일명.txt", false); 
// 로컬 주소는 폴더위치에따라 달라질수 있다.
xmlhttp.send();

if (xmlhttp.status == 200) {
    content = xmlhttp.responseText;
}

// 가져온 파일의 공백을 지우고 배열로 변환해서 변수에 담기
const filterArray = content.split('\n');

```

```javascript
/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
const filterItems = (query) => {
    return filterArray.filter((el) =>
        el.indexOf(query) > -1
    )
};

```

필터링 함수를 따로 만들어서 함수에 보관한다.

```javascript
input.addEventListener('change', () => {
  const filteringValue = filterItems(input.value);
  console.log(filteringValue)
  
  if(filteringValue.length > 0){ //감지된 비속어 배열이 0보다 크면 경고창
    alert('비속어가 감지되었습니다.')
  }
})
```

input의 change이벤트 안에value값에 따라 필터링 되는 값을 변수에 저장한다.

* 반드시 변경되는 이벤트 안에 변수를 담아야 한다.



이 필터링은 모든 문자열 탐색이므로 한 단어도 감지가 된다.

filter를 커스텀해서 원하는 필터링을 할 수 있다.

{% embed url="https://codepen.io/publisherkang/pen/MWBGQme" %}

##

## TXT파일에 포함된 단어를 검증하기

### 조금더 정확한 문자 일치 및 비속어 포함 장문도 필터링하는 방법.

```javascript
let content = null;
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../폴더명/파일명.txt", false); 
// 로컬 주소는 폴더위치에따라 달라질수 있다.
xmlhttp.send();

if (xmlhttp.status == 200) {
    content = xmlhttp.responseText;
}

// 가져온 파일의 공백을 지우고 배열로 변환해서 변수에 담기
const filterArray = content.split('\n');

```

위와 같다.

```javascript
input.addEventListener('change', () => {
  for(text of filterArray){
    if(input.value.toLowerCase().indexOf(text.toLowerCase()) > -1){
      console.log(text)
      return;
    }
  }
})
// 파일의 문자열을 불러와 매칭시킨다.

```

{% embed url="https://codepen.io/publisherkang/pen/ZEjormK" %}

원하는 필터링 조합에따라 커스텀이 가능하다!.





{% file src=".gitbook/assets/fword_list.txt" %}

