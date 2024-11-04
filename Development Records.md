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

## 개발 기록
### 2024-11-04
- 기본 레이아웃 작업 진행
  - SideBar, EmptyProject 화면 완성
  - CreateProject 작업중
- aside 와 section 의 width 비율 안 맞는 부분 수정 필요
  - width 1920px 기준으로 작업시 안 맞는것 같은데, 
    설정 문제인지 확인해보고 아닌 경우 flex-grow 속성 사용해서 맞춰보기 
