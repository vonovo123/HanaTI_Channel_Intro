# HanaTI_Channel_Intro
HanaTi Vue 연구회 채널팀 소개 페이지 Repo 입니다. 

## 프로젝트 환경설정

- Node.js 설치

- 프로젝트 clone 후 local 프로젝트에 의존성 설치

```
  npm install --필수

```

- 개발서버 실행

```
  npm run dev

```

- 저장시 자동 코드 컨밴션

VSCode 기본설정(settings.json)에서 자동저장 기능을 비활성화 하고 저장시 수행동작 기능을 활성화 합니다.
(다른 방법도 있음)
.prettierrc.json 에 선언된 attribute를 기준으로 저장시 자동 수정후 저장됨
```
  {
    ...
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },
    "editor.formatOnSave": false,
  }
```
