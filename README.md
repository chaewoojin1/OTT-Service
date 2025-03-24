
# 📺OTT 웹서비스
<img src="https://github.com/user-attachments/assets/ec4ce366-8c16-46d7-9aef-4bf8120ed0e8"  width="500" height="300"/>

## 📌 목차

* [🔎프로젝트 소개](#프로젝트-소개)
  + [프로젝트 기본설정](#프로젝트-기본설정)
  + [✔ 기술스택](#프로젝트-기본설정)
  + [✔ 팀원소개](#팀원소개)
* [⭐프로젝트 시안](#프로젝트-시안)
    + [✔ 관리자 페이지 구현 ✔](#-관리자-페이지-구현-)
    + [✔ Chatbot 구현 ✔](#-chatbot-구현-)
    + [✔ 강사소개 구현 ✔](#-강사소개-구현-)
    + [✔ INDEX 애니메이션 기능 구현 ✔](#-index-애니메이션-기능-구현-)
<br>

## 🔎프로젝트 소개
### 🎥 SNACK 
   **웹툰,드라마등 다양한 서비스를 즐길수 있는 플랫폼**

### 🔧 주요 기능
1. **관리자 페이지**  
2. **장바구니, 결제**  
3. **회원가입, 로그인**  
### 🔍 벤치마킹
 참고 사이트 :  [왓챠](https://watcha.com/browse/theater) ,[티빙](https://www.tving.com/onboarding)

### 👨‍💻 팀원 및 담당 파트

| 팀원 | 담당 파트 |
|------|-------------|
| 👩‍💻 강** (팀장) | 레이아웃, 깃허브, 웹툰페이지, 결제페이지 |
| 👨‍💻 김** | 로그인, 애니메이션페이지, 카카오MAP |
| 👨‍💻 임** | 드라마페이지, 카카오MAP, 장바구니|
| 👨‍💻 채우진 | 메인페이지, 영화페이지, 관리자페이지|


## ✅ Tech Stack

| 분류 | 기술 스택 |
|------|------------|
| FrontEnd | HTML5, JavaScript, CSS, React, Redux, Redux Toolkit |
| Tools | GitHub, Git, Notion, VSCode |

## ⭐프로젝트 시안
![image](이미지주소)
<br>

### ✔ 관리자 페이지 구현 ✔
<details>
<summary>관리자 페이지 구현 시연 영상</summary>


![관리자 페이지 시안영상](영상주소)

</details>

<details>
<summary>관리자 페이지 구현 시안 </summary>
  <img src="이미지주소"  width="700" height="400"/>

- Spring Security의  권한이 admin일때만 관리자페이지에 접속 가능

  <br>

<img src="이미지주소"  width="700" height="400"/>

- 상품페이지는 param으로 subject1 subject2 seach pageable를 매겨변수를 불러와 미술/체육/음악/요리 등 카테고리별로 선택후 수강명/수강내용을 검색할수있게 select를 두개 구성
- 검색하고 페이지네이션된 결과를 반환
  <br>

<img src="이미지주소"  width="700" height="400"/>

- 삭제는 다중선택삭제와 일반 삭제 가능
- 다중선택삭제는 javascript에 selectedIds"라는 이름을 가진 input 요소 중에 체크된 것들을 모두 선택하고
  가장 가까운 tr요소를 찾아 삭제하는 명령을 foreach함수를 써 반복하게 하여 선택삭제를 구현
- 회원을 삭제하기 전에 사용자에게 확인 메시지를 표시하고, if else문으로 사용자의 응답에 따라 삭제를 진행
</details>
<br>
<br>

### ✔ Chatbot 구현 ✔
<details>
<summary>Chatbot 구현 시연 영상</summary>

![chatBot](영상주소)

</details>
<details>
<summary>Chatbot 구현 시안 설명</summary>

<img src="이미지주소" width="700" height="400"/>

- websocket은 기존의 단방향 HTTP프로토콜과 호환되어 양방향 통신을 제공하기 위해 개발된 프로토콜
- websocket 라이브러리를 주입하여 사용
- configureMessageBroker() 메서드는 메시지 브로커를 설정하고 /app2가 붙으면 서버로 전송, /topic이 붙으면 클라이언트에게 메세지 보내도록 활성화
- registerStompEndpoints() 메서드로 클라이언트와 서버간의 웹소켓 연결을 활성화

<img src="이미지주소" width="700" height="400"/>

- @MessageMapping() 주소로 메세지가 오면 해당 매서드가 구현되며 @Sendto() 주소로 클라이언트에게 전송
- 처음 소켓연결시 연결이 성공하면  /app2/hello주소로 메세지를 보내 hello메서드를 실행시키도록 하여 기업소개, 상품소개를 선택할수있게 했으며 이는 topic/greetings주소로 클라이언트에게 전송
-
<img src="이미지주소" width="700" height="400"/>

- 기업소개 또는 상품소개 버튼을 클릭시 /app2/message주소로 메세지를 보내 message매서드를 실행시켜 그에대한 응답내용이 나오도록 함

</details>
<br>
<br>

### ✔ 강사소개 구현 ✔
<details>
<summary>강사 소개 페이지 시연 영상</summary>

![강사 소개](이미지주소)

</details>
<details>
<summary>강사 소개 페이지 시안 설명</summary>

  <img src="이미지주소"  width="700" height="400"/>

- 강사 페이지는 모든 사용자가 선생님의 프로필을 볼수있도록 한 페이지

<img src="이미지주소"  width="700" height="400"/>

설명

</details>
<br>
<br>

### ✔ INDEX 애니메이션 기능 구현 ✔
<details>
<summary>INDEX 애니메이션 기능 시연 영상</summary>

영상주소

</details>
<details>
&nbsp;<summary>INDEX 애니메이션 기능 시안 설명</summary>

  <img src="이미지주소"  width="700" height="400"/>
</details>

