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

function UnLoadingScreen() {
    document.getElementById('loading').remove();
}

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

