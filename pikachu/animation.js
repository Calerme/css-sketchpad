!function () {

    function writeCode(code, fakeStyleArea, trueStyleArea, speed, cb) {
        let _speed = typeof speed === 'number' ? speed : 18;

        let count = 0;
        const len = code.length;
        const timer = setInterval(()=>{
            const byte = code.substr(count++, 1)
            fakeStyleArea.textContent += byte;
            trueStyleArea.textContent += byte;

            // 将 fakeStyleArea 滚动到最底部
            fakeStyleArea.scrollTop = fakeStyleArea.scrollHeight;
            if (count >= len) {
                clearInterval(timer);
                cb && cb;
            }
        }, speed);
    }

    let code = `
    .sketchpad {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffe203; }
    /* util css*/
    .circle,
    .eye,
    .eye.left::before,
    .eye.right::after,
    .nose,
    .face,
    .lower-lip,
    .lower-lip::after {
      border-radius: 50%; }
    
    .has-border,
    .eye, .face,
    .upper-lip,
    .lower-lip {
      border: 2px solid #000; }
    
    .absolute,
    .eye,
    .eye.left::before,
    .eye.right::after,
    .nose,
    .face,
    .mouth,
    .upper-lip,
    .lower-lip,
    .lower-lip::after {
      position: absolute; }
    
    /* main css */
    #canvas {
      flex: 1;
      min-height: 9rem;
      position: relative; }
    
    /* Eyes */
    .eye {
      width: 2.3rem;
      height: 2.3rem;
      background: #292929; }
    
    .eye.left {
      right: 50%;
      margin-right: 3.3rem; }
    
    .eye.right {
      left: 50%;
      margin-left: 3.3rem; }
    
    .eye.left::before,
    .eye.right::after {
      content: '';
      display: block;
      left: 15%;
      top: 5%;
      width: 0.9rem;
      height: 0.9rem;
      background: #fff; }
    
    /* nose */
    .nose {
      top: 1.3rem;
      left: 50%;
      transform: translateX(-50%);
      border-width: 0.6rem 0.7rem;
      border-style: solid;
      border-color: #000 transparent transparent transparent; }
    
    /* face */
    .face {
      top: 4.5rem;
      width: 3.77rem;
      height: 3.77rem;
      background-color: #f00; }
    
    .face.left {
      right: 50%;
      transform: translateX(-4.6rem); }
    
    .face.right {
      left: 50%;
      transform: translateX(4.6rem); }
    
    /* mouth */
    .mouth {
      top: 2.6rem;
      left: 50%;
      width: 7rem;
      height: 7rem;
      transform: translateX(-50%);
      overflow: hidden; }
    
    .upper-lip {
      top: -3%;
      width: 3.77rem;
      height: 1.3rem;
      background-color: #ffe203;
      z-index: 1; }
    
    .upper-lip.left {
      right: 50%;
      border-top: 0;
      border-right: 0;
      border-bottom-left-radius: 50% 80%;
      transform: rotate(-30deg); }
    
    .upper-lip.right {
      left: 50%;
      border-top: 0;
      border-left: 0;
      border-bottom-right-radius: 50% 80%;
      transform: rotate(30deg); }
    
    .lower-lip {
      left: 50%;
      bottom: 10%;
      width: 5rem;
      height: 20rem;
      background-color: #900;
      transform: translateX(-50%);
      overflow: hidden; }
    
    /* tongue */
    .lower-lip::after {
      left: 50%;
      bottom: -80%;
      content: ' ';
      width: 10rem;
      height: 20rem;
      background: #ff3f54;
      transform: translateX(-50%); }`;

      const fakeStyleArea = document.querySelector('.code-view');
      const trueStyleArea = document.getElementById('true-style');

      writeCode(code, fakeStyleArea, trueStyleArea);
}.call();