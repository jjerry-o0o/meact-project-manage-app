## 프로젝트 기능 정리
- 사이드 바
  - 새 프로젝트 버튼
  - 생성된 프로젝트 명 클릭시 화면 렌더링
- 새 프로젝트 생성
  - 항목 입력 (Title, Description, Due Date)
  - Due Date 에 달력 팝업
  - 내용 저장
  - 작성 취소
- 생성된 프로젝트 화면
  - 할 일 추가
  - 할 일 삭제
  - 프로젝트 삭제
- Tailwind css 활용하여 디자인 구현
  - 이벤트에 따라서 디자인 변경 되는 디테일 포함

## 개발 기록
### 2024-11-04
- 기본 레이아웃 작업 진행
  - SideBar, EmptyProject 화면 완성
  - CreateProject 작업중
- aside 와 section 의 width 비율 안 맞는 부분 수정 필요
  - width 1920px 기준으로 작업시 안 맞는것 같은데, 
    설정 문제인지 확인해보고 아닌 경우 flex-grow 속성 사용해서 맞춰보기 

### 2024-11-05
- 기본 레이아웃 작업 완료
  - CreateProject, ProjectManage 까지 작업 완료
- 어제 해결 못한 aside & section width 비율 맞추기 해결
  - 오른쪽이 부분에 여백없이 자꾸 꽉 차서 이상한건 줄 알았는데, 오른쪽 여백을 안 준거였음.
- 다음 할 일
  - 프로젝트 생성 버튼 클릭시 CreateProject 화면 나오게
  - 내용 입력 후 사이드 바에 신규 프로젝트 명 추가 되도록
  - ProjectManage 화면에 작성한 내용 바인딩 되도록
- 나중에 할 일로 마우스 호버시, 클릭시 디자인 변경되는 디테일 추가

### 2024-11-06
- Create, Add, Save, Cancel 버튼 클릭시 화면 변경 되도록 작업 완료
- 해결 못한 부분 & 다음 할 일
  - forwardRef를 사용하는 이유 다시 복습하기 (아래 2가지 이유 외에 더 있는지 확인)
    - ref는 컴포넌트 간에 전달 못함
    - 자식 컴포넌트가 제어권을 확보하게 됨
    - 24.11.08 추가) 위 두가지 이유가 가장 큰 이유이고,
      이렇게 함으로써, 자식 컴포넌트의 다른 값(tag 등)이 변경 되었을 때,
      전체 코드를 수정할 필요없이 자식 컴포넌트만 수정하면 됨
  - 내용 입력 후 사이드 바에 신규 프로젝트 명 추가 되도록
  - ProjectManage 화면에 작성한 내용 바인딩 되도록

### 2024-11-08
- forwardRef 복습 완료
- 다음 할 일
  - 신규 프로젝트 생성 되도록
  - 사이드 바에 프로젝트 명 생기도록
  - 사이드 바 프로젝트 명 클릭시 각 화면으로 넘어가도록
  - 프로젝트 생성시 작성한 내용 보이도록