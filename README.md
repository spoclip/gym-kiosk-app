# Gym Kiosk App Shell

gym-kiosk-app 프로젝트를 웹뷰로 실행하는 앱입니다.

## 기술 스택

- React Native
- Expo
- WebView

## env

```
EXPO_PUBLIC_WEBVIEW_URL=http://192.000.000.000:5173/
```

gym-kiosk-app 의 주소를 설정해야합니다.

## 앱 환경 분리

### production

- 실행 방법
  원스토어 다운로드 or 업데이트
- 앱 이름
  스포클립 체육관용
- 백엔드 서버
  production

### preview

- 앱 이름
  스포클립 체육관용(preview)
- 실행 방법
  구글 드라이브 - 공유 문서함 - apk 공유 폴더에서 다운로드
- 백엔드 서버
  stage

### development

- 앱 이름
  스포클립 체육관용(dev)
- 실행 방법
  구글 드라이브 - 공유 문서함 - apk 공유 폴더에서 다운로드
- 백엔드 서버
  dev

### local

- 실행 방법
  expo 실행

```
npm run dev
press s ( expo 전환 )
```

- 백엔드 서버
  환경 변수 따라 바꾸기 가능

`Press s | switch to Expo`
