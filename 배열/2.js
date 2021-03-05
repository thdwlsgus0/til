/* 배열과 관련된 연산 */
/* 1번. 요소 "Jazz", "Blues"가 있는 styles 배열 생성 */
const styles = ["Jazz", "Blues"];
console.log(styles);
/* Rock-n-Roll을 배열 끝에 추가 */
styles.push("Rock-n-Roll");
console.log(styles);

/* 배열 정 중앙에 있는 요소를 "Classics로 바꿉니다."*/
styles[Math.floor((styles.length-1)/2)] = "Classics";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);