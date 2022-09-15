/*
1.정규식(regExp) : Regular Expression 
    -필요한 내용이나 단어를 검색해서 수정/삭제 처리 
*/

/*정규식 사용 방법 */
const str = "This is nodeJS"; //이메일,전화번호,우편번호 : 형식에 맞는지 체크

//검색어 설정
const regEx01 = /nodeJS/;

//검색 : 검색어.test(str); - console.log()
//return 은 true,false : 영어 대소문자 구분
console.log(regEx01.test(str));
console.log("");

/*g 옵션 : 문장 전체,  i : 대소문자 구분 없이 */
const regEx02 = /nodejs/gi;
console.log(regEx02.test(str));
console.log("");

/*
    Server Node
    -Mysql에 INSERT INTO 테이블명 VALUES(); : 자료등록
    -웹주소를 이용해서 삭제해야 되는 경우
    http://localhost:5000/delete/6
*/

const str01 = "nodeJs";
//const regEx03 = /[0-9]/; 숫자로 돼있는지 체크
const regEx03 = /[^0-9]/; //글자입니까?? -> 앞에 ^ 붙이면 숫자가 아니냐 물어보는것
console.log(regEx03.test(str01));

/*white space (공백) 체크 */
console.log("");
const str02 = "1 ";
const regEx04 = /\s/; /*공백체크 : \s */
console.log(regEx04.test(str02));

//시작을 체크하는 ^, 마지막 내용을 체크하는 $
console.log("");
const str03 = "12345546465645";
//숫자로 시작하고 숫자로 끝나는 검색어 체크
//대괄호 앞에 ^ 붙인다
const regEx05 = /^[0-9]+$/; /* +$ 여러개의 숫자로 끝납니다. */
console.log(regEx05.test(str03));

//전화번호
//숫자로 되어있는지 확인방법은 \d{2,3} ->앞 숫자가 2자리,3자리 이다.
//지역번호(통신사) : 2,3 => /^\d{2,3}/
//중간번호 3,4 =>/\d{3,4}/
//4 =>/\d{4}$/
console.log("");
const str04 = "010-1111-1111";
const regEx06 = /^\d{2,3}-\d{3,4}-\d{4}$/;
console.log(regEx06.test(str04));

/*주민번호 */
//자릿수 6-7
//-다음 첫 숫자는 1,2,3,4 중 하나
console.log("");
const str05 = "000000-2111111";
const regEx07 = /\d{6}-[1-4]\d{6}/;
console.log(regEx07.test(str05));

/*우편번호  3-2 */
console.log("");
const str06 = "123-60";
const regEx08 = /\d{3}-\d{2}$/;
console.log(regEx08.test(str06));

/*이메일  : 기본타입 @ 체크 */
console.log("");
const str07 = "busanit@busanit.co.kr";
const regEx09 = /@/g;
console.log(regEx09.test(str07));

/*이메일 실제 정규식 */
const regEx10 = /^[0-9a-zA-Z]+@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/;
console.log(regEx10.test(str07));

/* 
정규식(체크) -> 대시 입력, 불필요한 내용 바꾸거나 삭제
                -  trim, replace */