import { StyleSheet } from "react-native";

import * as Application from "expo-application";
import WebView from "react-native-webview";

function KioskAppWebView() {
  const deviceId = Application.getAndroidId();

  /**
   * @todo postMessage를 사용하여 보안 강화해야합니다.
   */
  const injectedJavaScript = `
    window.DEVICE_ID = "${deviceId}";
    true;
  `;

  return (
    <WebView
      source={{ uri: process.env.EXPO_PUBLIC_WEBVIEW_URL as string }}
      style={styles.container}
      injectedJavaScript={injectedJavaScript}
      webviewDebuggingEnabled
      originWhitelist={["*"]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KioskAppWebView;
