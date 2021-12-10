# FRA-WE-TAK 프로젝트
World's best eco-friendly chicken egg or dinosour egg, FRA-WE-TAK
다양한 종류의 계란을 전시 및 판매하는 사이트 입니다 :)


## 개발기간
: 2021/11/29~2021/12/10

## 구성
- Back-end 3명: 박재용, 박진성, 유현이
- Front-end 3명 : 이나은, 오동녘어진이, 이지현
<a href='https://github.com/wecode-bootcamp-korea/27-1st-FRA-WE-TAK-backend'>백엔드 깃허브 주소</a>
<a href='https://github.com/wecode-bootcamp-korea/27-1st-FRA-WE-TAK-frontend'>프론트엔드 깃허브 주소</a>

## 적용 기술 및 구현 기능 적용 기술
Back-End: Python, Django Web Framework, AWS EC2, RDS, S3, MySQL
Front-End: JavaScript, React.js, sass, React-router-dom.
Common : Git, Github, Slack, Trello, Notion

[Back-End]

- 회원가입페이지 : bcrypt, jwt
- 로그인 페이지  : 데코레이터, Id찾기 기능 구현
- 메인페이지 : 제품 리스트 보여주기
- 리스트페이지: 제품 리스트 보여주기, 검색기능 구현
- 상세페이지: 상세제품 보여주기
- 장바구니 : Get Post Delete Patch로 장바구니 add delete 구현

[Front-End]
동적 라우팅 적용.

- Navbar : Nav 기능 구현, 장바구니 목록 표시 기능 구현, 로그인 성공 여부에 따라 아이콘 동적으로 바꾸기 기능 구현.
- 마이 페이지: 장바구니에 담겨있는 상품 목록을 표시하고 더불어 수량, 가격을 조절 & 상품 삭제 기능 구현.
- 메인 페이지 : (무한)슬라이드 기능 구현.
- 리스트 페이지 : 상품 목록 표시 기능 구현.
- 상세 페이지 : 장바구니 추가 기능 구현.
- 회원가입 페이지 :  이름(1자이상), 이메일('@', '.' 포함)유효성 검사, 비밀번호(특수문자, 숫자, 대문자, 소문자 혼합 8자 이상)유효성 검사, 전화번호(1자이상) 주소(1자이상)유효성 검사
- 로그인 페이지: 회원가입을 통해 저장된 user정보로 로그인 유효성 검사
- 아이디 찾기 페이지: 이름과 전화번호 입력을 통하여 user정보와 일치할 시 등록되 아이디 화면에 출력 구현

Reference 이 프로젝트는 "FREITAG" 사이트를 참조하여 학습목적으로 만들었습니다. 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
