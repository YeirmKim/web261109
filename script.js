const title = ["미션 피서블", "미션 임파서블", "미션 임파서블: 로그네이션", "미션 임파서블: 고스트 프로토콜", "미션 임파서블: 폴아웃"];
const year = [20211,1996,1986,2015,2025];
const rating = [7.40, 7.03, 7.41,7.20, 7.16];
//즉시 실행 함수 만들기
function() {
    console.log("나는 함수다. 실행이 되었다");
}
const gugudan => {   
    for (let i = 1; i <= 9; i++) {
        console.log(`3 x ${i} = ${3 * i}`);
    }
};
gugudan();
const add = (a, b) => a + b;

console.log(add(1234,5678));
let sum = 0;
for (let i = 0; i < rating.length; i++) {
    sum += rating[i];
}