declare module "@env" {
  export interface ProcessEnv {
    EXPO_PUBLIC_WEBVIEW_URL: string;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_WEBVIEW_URL: string;
    }
  }
}
