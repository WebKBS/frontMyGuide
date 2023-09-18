# 약관 동의 체크박스 구현

### HTML

```html
 <div class="inner">
  <h2>가입 약관 동의</h2>
  <div class="agree-wrap">
    <div class="agree-head">
      <input type="checkbox" id="all-check" />
      <label for="all-check">모든 약관에 동의합니다.</label>
    </div>
    <div class="check-box">
      <div class="box">
        <input type="checkbox" id="check1" data-required="true" />
        <label for="check1">이용 약관에 동의합니다. (필수)</label>
      </div>
    </div>
    <div class="check-box">
      <div class="box">
        <input type="checkbox" id="check2" data-required="true" />
        <label for="check2"
          >개인정보 수집 및 이용에 동의합니다. (필수)</label
        >
      </div>
    </div>
    <div class="check-box">
      <div class="box">
        <input type="checkbox" id="check3" data-required="true" />
        <label for="check3"
          >개인정보의 제 3자 제공에 동의합니다. (필수)</label
        >
      </div>
    </div>
    <div class="check-box">
      <div class="box">
        <input type="checkbox" id="check4" data-required="false" />
        <label for="check4"
          >마켓팅 활용 및 광고성 정보 수신에 동의합니다 (선택)</label
        >
      </div>
    </div>
  </div>
  <button id="next-btn" type="button" disabled>
    다음
  </button>
</div>
```

약관 엘리먼트를 만들어준다.



### Javascript

```javascript
const allCheckBtn = document.getElementById("all-check");
const allBtn = document.querySelectorAll("[data-required]");
const requiredBtn = document.querySelectorAll("[data-required=true]");
const nextBtn = document.getElementById("next-btn");

allCheckBtn.addEventListener("change", (event) => {
  const target = event.target;

  if (target.checked) {
    allBtn.forEach((btn) => {
      btn.checked = true;
      nextBtn.disabled = false;
    });
  } else {
    allBtn.forEach((btn) => {
      btn.checked = false;
      nextBtn.disabled = true;
    });
  }
});

function updateAllCheckBtn() {
  const allRequiredChecked = [...allBtn].every((btn) => btn.checked);
  const requiredChecked = [...requiredBtn].every((btn) => btn.checked);
  allCheckBtn.checked = allRequiredChecked;

  nextBtn.disabled = !requiredChecked; // 필수 동의 체크시 다음 버튼 활성화
}

allBtn.forEach((btn) => {
  btn.addEventListener("change", updateAllCheckBtn);
});
```

설명

allallCheckBtn 클릭시 모든 체크박스를 제어해 준다.



updateAllCheckBtn 함수를 만들고\
\[...선택자] 구조분해를 통해 선택자를 나열하고 every 내장 메서드를 통해서 버튼의 checked값을 확인한다.

every 메서드는 배열의 모든 값이 true 여야  true를 반환한다. 그렇지 않으면 false

{% embed url="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every" %}

allRequiredChecked 상태로 allCheck 버튼의 checked를 제어한다.\
\- 선택 동의 포함. 선택동의도 체크를 하지않으면 전체 동의 체크박스가 false로 만든다.

requiredChecked 변수를 따로 만들어서 필수 동의 상태를 체크한다.\
\- 이는 선택동의를 제외해도 다음 버튼이 활성화 되어야하기때문에 선택동의를 제외한 필수동의 전체 체크가 만족될 시 nextBtn을 활성화 시킨다.\
필수 동의가 만족되지 않으면 다음 버튼을 활성화지키지 않는다.

{% embed url="https://codesandbox.io/embed/elated-pond-36h6zz?fontsize=14&hidenavigation=1&theme=dark" %}

