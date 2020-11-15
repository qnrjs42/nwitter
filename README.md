## jsconfig.json

```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": [
        "src"
    ]
}
```

```javascript
import Router from './Router'; // jsconfig.json 적용 전
import fbase from '../fbase'; // jsconfig.json 적용 전

import fbase from 'fbase'; // jsconfig.json 적용 후
import Router from 'components/Router'; // jsconfig.json 적용 후
```


---


## Firebase .env

REACT_APP_ 으로 시작해야 함

---

## AWS amplify

Firebase와 비슷한 기능을 함

GraphQL API, REST API 기능 제공

---

## Firebase

Firebase는 실무에서 쓰는 걸 권장하지 않고, 아이디어나 기능 구현을 빠르게 구현하고자할 때 사용
유저가 서비스를 원하면 그 때 자신만의 서버, 사용자, 데이터베이스를 만듦

### Build better apps
<br/>

### Cloud Firestore
- ios, android, web 모두 사용 가능

### Cloud Functions
- ios, android, web 모두 사용 가능
- serverless function의 기능을 제공 [ AWS의 lambda와 비슷 ]

### Cloud Storage
- ios, android, web 모두 사용 가능
- 파일 업로드 [ AWS의 S3와 비슷 ]

### Hosting
- web 사용 가능
- assets들을 배포하거나, React application을 배포하고자할 때 사용

### Authentication
- ios, android, web 모두 사용 가능
- Firebase의 중요 포인트
- 이미 구현된 Authentication을 이용해서 인증 구현 시 10분도 안 걸림

### Realtime Database
- ios, android, web 모두 사용 가능
- Firbase 원조 데이터베이스
- 지금은 잘 사용하지 않음

---

### Improve app quality
<br/>

### Crashytics
- ios, android, unity 사용 가능
- application의 충돌 같은 것을 볼 수 있음

### Performance Monitoring
- ios, android, web 모두 사용 가능
- app의 성능을 보여주는 기능

### Test Lab
- 웹사이트를 각종 기기별로 테스트할 수 있음

### App Distribution
- ios, android 사용 가능
- ios, android의 버전 배포를 도와줌

---

### Grow your business
<br/>

### In-App Messaging
- ios, android 사용 가능
- 앱 이용자들에게 메시지를 보냄


### Google Analytics
- ios, android, web 사용 가능
- 구글 광고

### Cloud Messaging
- ios, android, web 사용 가능
- 푸쉬 알림 사용