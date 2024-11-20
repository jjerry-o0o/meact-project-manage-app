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

### 2024-11-11
- 사용자가 입력한 newProjectData 와 생성된 프로젝트 정보들을 모두 가지고 있는 PROJECT_DATA 를 
각각 어떻게 관리할지 고민하기 (useState 와 useRef 를 각각 어떻게 사용할지)

### 2024-11-12
- 원래는 useRef 를 사용해서 projectData 를 관리하려고 했는데
구글링 하다 보니 useRef 를 리액트 도큐먼트에서도 지양하라는 얘기가 있다는 내용을 봐서
useRef 를 사용해보기 위해 억지로 넣기 보다 useState 를 최대한 활용하는 방향으로 수정
- 기존에 isCreatingProject 라는 명칭으로 useState 로 관리하던 화면(section) 변경은
sectionType 이라는 명칭으로 수정하여 각 버튼별로 클릭시 각각에 맞는 화면이 나올 수 있도록 수정
- 기존에 projectData 라는 명칭으로 useRef 로 관리하던 값은
동일한 명칭에 useState 로 변경하여 관리하는 방향으로 수정
- 원래는 projectData 의 값이 변경 되어도 이벤트 발생시에만 변경된 값을 
projectData에 반영하면 된다 생각해서, useRef 를 사용하려 했는데
다시 생각해보니 동일한 이치로 setProjectData를 제한적으로 원할 때만 사용해주면 되는 부분이라
useState 를 사용하는 방향으로 변경했다.
- 다음 할 일
  - ProjectManage 화면에서 할일 추가하는 기능

### 2024-11-14
- ProjectManage 화면에서 tasks 를 보여줘야 하는데 어떻게 하는게 좋을까
  (신규 저장 및 삭제 가능해야함. 수정은 아직 x)
  1. ProjectManage 컴포넌트(자식)에서 tasks 만 useState 사용하여 상태 관리하고, 값 변경 시 App 컴포넌트(부모)에 전달
  2. ProjectManage 에서 newTask 생성 되면 바로 App 에 있는 projectData 에 반영. (newTask 는 useRef 로 관리)
  
- 1번 방법은 useState 를 남용하는 것 같고, 2번 방법은 필요치 않은 렌더링이 남발하게 되는 것 같음
- 위 두가지 방법 중에서 고민하다가, tasks 는 ProjectManage 화면에서만 상태가 변하는 값이라 ProjectManage 화면만 렌더링 되도록 하는게 맞을 것 같다고 생각함.
- ProjectManage 에서 tasks 를 task 내용과 index 로 구성된 객체 배열 형태로 만들어서 useState 사용해서 상태 관리하고, 화면을 나가게 되는 경우에 App 컴포넌트에 전달해서 setProjectData 에 반영될 수 있도록.
  - tasks 를 배열이 아닌 객체 배열로 하는 이유는 삭제할 때 중복 되는 내용이 있는 경우


- 막상 작업하다 보니, setNewTasks() 가 호출할 때,  setProjectData() 도 호출하는 식으로 구현이 되었다. ProjectManage 화면을 벗어나는 순간에만 setProjectData() 를 호출하자니, 그럴려면 sectionType 이 Manage 가 아닌 순간 또는, 다른 프로젝트를 클릭한 순간을 알 수 있어야 하는데,,,, 

- 생각해보니 setSectionType 을 사용하면 가능할 것 같다. 
- 추가로, sectionType 에서 사용하는 index 값에는 projectId 값을 넣어주는 형태로 변경해야 할 것 같다. projectId 는 projectTitles 에서도 사용하도록 코드를 수정했다.



[ 다음 할일 ]
1. projectId 값을 사용하여, 각 프로젝트의 데이터가 관리 될 수 있도록 하기
2. 사이드 바에서 프로젝트 명 클릭시 각 프로젝트 데이터가 알맞게 ProjectManage 에 바인딩 되도록 하기
   - 지금처럼 selectedProject 를 사용할건지, ProjectManage 에 prop 넘길때, projectData.map() 사용해서 projectId 일치하는 데이터를 넘길지 고민하기
3. 프로젝트 별로 tasks 저장할 때, projectId 값이 일치하는 곳에 tasks 저장 되도록 하기
4. 위의 할일 다 완료하면 validation 체크 추가랑 기타 등등 마저 완료 하기


### 2024-11-15
- sectionType (=sectionType, index) 상태 값을 viewMode(=sectionType) 와 selectedProjectId(=index) 두개로 나눠서 관리하는 걸로 변경

### 2024-11-20
수정 사항 및 남은 기능 정리
1. 상태 값 viewMode, projectData, selectedProjecId 로 수정
2. viewMode 값에 따라 화면 전환 되도록 수정
3. 프로젝트 생성 시 projectId 값 포함한 projectData 저장되도록 수정
4. 사이드 바에 projectData 의 projectId, title 값 뿌려지도록 수정
5. 사이드 바에서 title 클릭시 해당 projectId 값을 가진 projectData 가 ProjectManage 화면에 정상 바인딩 되도록 수정
6. ProjectManage 화면에서 tasks 상태 관리 및 App 으로 전달하여 projectData.tasks 에 저장 되도록 작업
7. task 삭제 기능 작업
8. project 삭제 기능 작업


내 맘대로 변경 사항
- ProjectManage.jsx 에 description, tasks Update 기능 추가
  - 강의에서 보여준 완성본에는 ProjectManage 화면에 Delete, Add Task 버튼만 있어서,
  Add Task 할 때마다 App 컴포넌트의 setProjectData 를 호출하는게 깔끔한 방법일 것 같다.
  - 근데 나는 그렇게 하게 되면 task를 생성할 때마다 부모 컴포넌트를 다시 렌더링 하는게 맘에 들지 않아서 task 를 ProjectManage 에서 따로 관리 하다가 projectId 또는 viewMode 가 변경되는 경우에만 부모 컴포넌트의 setProjectData 를 호출 하고 싶다.
  - 이를 구현하기 위해서는 내부적으로 projectId 와 viewMode 변경 시에 setProjectData 를
  호출해서 task 를 저장하면 되는데, 굳이 나는 task 가 변경되지 않은 경우에는 저장을 하기 싫었고,
  그렇다고 tasks 의 모든 내용을 확인하는건 너무 구리니까, update 버튼을 추가하여 사용자 판단에 맡기기로 했다.
  - 그리고 이왕 update 기능 추가 된 김에 description 도 같이 추가될 수 있도록 바꾸기로 했다.