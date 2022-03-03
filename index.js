// require에 모듈 명을 넣으면 npm이 알아서 패키지를 인식해 가져온다
const randomColor = require("randomcolor");

const clr1 = randomColor();
const clr2 = randomColor();
const clr3 = randomColor();
console.log(clr1, clr2, clr3);
