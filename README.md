# 하이퍼클라우드 - 커뮤니티 어플리케이션 만들기

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>&nbsp;
## 개요
원티드 프리온보딩 백엔드 코스 3차 과제 입니다. 

유저들이 서로 친구를 맺고 글을 올릴 수 있는, 커뮤니티 앱을 만들기 위한 API 구현

- 개발기간: 2022.10.11 - 2022.10.14 (3일)
- 개발인원: 안상현(팀장), 안수철, 음정민, 이신희 (4명)



## 프로젝트 실행 방법

- 사전에 Git, node, MySQL이 설치되어있어야 합니다.

```shell
# 레포지토리 클론
$ git clone https://github.com/J-EUM/pre-onboarding-3rd-hypercloud.git

# 접속
$ cd pre-onboarding-3rd-hypercloud

# 패키지 설치
$ npm install

# 데이터베이스 생성
mysql> create database 데이터베이스명 character set utf8mb4 collate utf8mb4_general_ci; 

# .env파일 만들기
.env.sample 파일 참고

# 데이터베이스 테이블 생성
$ npx dbmate up

# 프로젝트 실행
$ npm run start:dev

# server start : http://localhost:SERVER_PORT
```


## 프로젝트 구조
### DB모델링

![image](https://user-images.githubusercontent.com/97498663/195664849-15b9a4b4-d475-490b-b6d6-4190748731bd.png)


## 구현 기능에 대한 소개
- 프레임워크가 제공하는 객체지향 개발적 구조를 활용하기 위해 `NestJS` 를 선택
- 

### 1. 로그인, 회원가입 (안수철)
---
- 선택한 기술들과 구조, 방법론에 대해 문서로 짧게나마 기록하여 공유해주세요.
ex) “프레임워크가 제공하는 객체지향 개발적 구조를 활용하기 위해 `NestJS` 를 선택”
- 본인이 작성한 앱의 장점과 단점을 문서화해주세요.
    
    ex) “API 내 Authentication에 집중하였기 때문에 유저의 친구 권한에 따른 포스트 답변과 ‘좋아요’ 버튼 클릭이 가능. 다만, 유저가 글을 올릴 때 단순 텍스트 외에 파일 업로드도 구상하였지만, 시간적 제약으로 파일 업로드 기능은 스킵되어 UX상으로 부족함.”

### 2. 팔로우, 언팔로우 (안상현)
---
- 선택한 기술들과 구조, 방법론에 대해 문서로 짧게나마 기록하여 공유해주세요.
ex) “프레임워크가 제공하는 객체지향 개발적 구조를 활용하기 위해 `NestJS` 를 선택”
- 본인이 작성한 앱의 장점과 단점을 문서화해주세요.
    
    ex) “API 내 Authentication에 집중하였기 때문에 유저의 친구 권한에 따른 포스트 답변과 ‘좋아요’ 버튼 클릭이 가능. 다만, 유저가 글을 올릴 때 단순 텍스트 외에 파일 업로드도 구상하였지만, 시간적 제약으로 파일 업로드 기능은 스킵되어 UX상으로 부족함.”

### 3. 포스트 작성, 수정, 삭제 (이신희)
---
- 선택한 기술들과 구조, 방법론에 대해 문서로 짧게나마 기록하여 공유해주세요.
ex) “프레임워크가 제공하는 객체지향 개발적 구조를 활용하기 위해 `NestJS` 를 선택”
- 본인이 작성한 앱의 장점과 단점을 문서화해주세요.
    
    ex) “API 내 Authentication에 집중하였기 때문에 유저의 친구 권한에 따른 포스트 답변과 ‘좋아요’ 버튼 클릭이 가능. 다만, 유저가 글을 올릴 때 단순 텍스트 외에 파일 업로드도 구상하였지만, 시간적 제약으로 파일 업로드 기능은 스킵되어 UX상으로 부족함.”

### 4. 포스트 좋아요, 댓글 (음정민)
---
- 필수 기능인 포스트에 대한 댓글과 좋아요 기능을 구현했으나 NestJS를 처음 접하는 동시에 기능을 구현해야 하는 시간적 제약으로 NestJS를 사용하는 장점을 살리지 못했다. auth 미들웨어를 작성하지 못해서 API별로 토큰을 처리하는 동일한 코드가 중복되어있다. typeorm을 db연결에만 사용하고 데이터 처리 작업은 raw query로 작성했는데 모듈화를 적절히 하지 못했다. 


## API doc

