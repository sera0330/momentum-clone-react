# Momentum Clone

크롬 확장프로그램 [Momentum](https://momentumdash.com/)의 일부 기능을 React.js로 구현한 프로젝트



## 사용된 기술
* JavaScript ES6
* React.js
* Redux Toolkit
* redux-persist
* styled-components

## 기능
### 사용자 등록/해제
![등록:해제](https://user-images.githubusercontent.com/39563609/139577992-f6f690dd-bc29-40a6-b3f5-1854c95dec68.GIF)
* Intro 화면에서 사용자 이름 입력 후 엔터를 누르면 Home 화면으로 전환되고, Local Storage에 사용자가 등록됩니다.
* Home 화면에서 Greeting 문구(Hello, OOO)를 클릭하면 로그아웃 확인 알림을 보냅니다.

### 날씨
* 위치 추적 허용 시, 화면의 우측 상단에 현재 위치의 기온과 날씨 정보를 출력합니다.

### 시계
* 화면의 중앙에 현재 시간을 출력합니다.

### Focus
![focus](https://user-images.githubusercontent.com/39563609/139578277-dd427d1d-6d36-4308-895a-4a1a2e96ea4e.GIF)
* 내용 입력 후 엔터를 누르면 Local Storage에 Focus가 등록됩니다.
* Focus 영역에 커서를 올리면 체크박스와 More 버튼이 나타납니다.
* 체크박스 체크 상태에는 내용에 중간 선이 그어집니다.
* More 버튼 클릭 시, 드롭다운이 나타납니다. Focus 수정, 초기화가 가능합니다.

### Todo
![todo](https://user-images.githubusercontent.com/39563609/139578690-92c82238-8f2f-42d6-9cde-ad8cec23ea0d.GIF)
* Todo 버튼 클릭 시, Todo 드롭다운이 나타납니다.
* Todo를 등록, 수정, 삭제할 수 있습니다.

### 명언/배경화면
![random](https://user-images.githubusercontent.com/39563609/139578955-626747c3-621e-45ca-ba77-122974b1f7eb.GIF)
![qoute](https://user-images.githubusercontent.com/39563609/139578544-d219780f-0742-43ac-abbf-0f09237c1308.GIF)
* 새로고침 마다 새로운 [명언](https://github.com/lukePeavey/quotable)과 [배경화면](https://source.unsplash.com/)을 불러옵니다.
* 명언 클릭 시, 내용이 클립보드에 복사됩니다.

### 테마
![theme](https://user-images.githubusercontent.com/39563609/139578626-8a273b4c-bb90-4eea-b260-72b39c58c66d.GIF)
* 테마 토글 버튼 클릭 시, Light Mode/Dark Mode로 테마가 전환됩니다.
* 테마는 드롭다운에 적용됩니다.
