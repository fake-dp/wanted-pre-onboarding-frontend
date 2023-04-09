# 원티드 프리온보딩 프론트엔드

# 1. 배포 링크

### 📌

# 2. 프로젝트 구조

```bash

📦 src
├── 📂 api
├── 📂 component
│   ├── 📂 auth
│   │    ├── 📄 LoginForm
│   │    └── 📄 SignForm
│   ├── 📂 todo
│   │    ├── 📄 CreateTodoForm
│   │    ├── 📄 TodoHeader
│   │    ├── 📄 TodoItem
│   │    └── 📄 TodoList
├── 📂 hooks
├── 📂 page
│   ├── 📄 SigninPage
│   ├── 📄 SignupPage
│   └── 📄 TodoPage
├── 📂 router
└── 📂 styles

```

# 3. 기능 시연 GIF

## ⭐️ 로그인 , 회원가입

✅ Assignment1

- 이메일과 비밀번호의 유효성 검사기능 구현 (이메일 조건: @ 포함, 비밀번호 조건: 8자 이상)
- 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼 활성화

✅ Assignment2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동

![유효성및경로이동](https://user-images.githubusercontent.com/123337284/218354268-a71b0e1a-dd2b-47b3-b4e2-18495b935813.gif)

---

✅ Assignment3

- 로그인 성공시 todo 페이지로 리다이렉트
- 응답받은 JWT는 로컬 스토리지에 저장

![로컬저장경로이동](https://user-images.githubusercontent.com/123337284/218354276-072a06d6-6d2e-4ab2-8757-ada943be6338.gif)

---

✅ Assignment4

- 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트
- 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트

📌 추가 구현

- 로그아웃 (로컬 스토리지에서 삭제)

![리다이렉트투두](https://user-images.githubusercontent.com/123337284/218355463-35f7744c-645d-4ace-885d-f6ff8e0b962b.gif)

---

## ⭐️ Todo List

✅ Assignment5, 6

- /todo경로에 접속하면 투두 리스트의 목록 확인
- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

![투두생성](https://user-images.githubusercontent.com/123337284/218357429-07404b84-f035-4495-b6be-c751e835e619.gif)

---

✅ Assignment7 ,8, 9

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- 투두 리스트의 삭제 기능을 구현해주세요

![삭제하기](https://user-images.githubusercontent.com/123337284/218357452-fd53e25b-0e93-4ef2-9891-170ec603eef2.gif)

---

✅ Assignment10

- TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
- 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
- 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요

![수정하기](https://user-images.githubusercontent.com/123337284/218357441-49b4e181-77f6-4f0d-a782-19ed0bffd56f.gif)

---

# 4. 프로젝트 설치 및 실행

1. 프로젝트 패키지 설치

```
npm install
```

2. 프로젝트 실행

```
npm start
```

# 5. 사용 라이브러리

Axios
, react-router-dom,
React-Icons ,styled-components
