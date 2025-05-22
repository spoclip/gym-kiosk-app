const os = require("os");
const fs = require("fs");
const path = require("path");

function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // IPv4이고 내부 IP가 아닌 경우만 선택
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost"; // IP를 찾지 못한 경우
}

function updateEnvFile() {
  const ipAddress = getLocalIpAddress();
  const port = 5173; // 기본 포트
  const webviewUrl = `http://${ipAddress}:${port}`;

  const envPath = path.join(".env.local");
  if (fs.existsSync(envPath)) {
    let envContent = fs.readFileSync(envPath, "utf8");

    // EXPO_PUBLIC_WEBVIEW_URL이 이미 있는 경우 업데이트, 없는 경우 추가
    if (envContent.includes("EXPO_PUBLIC_WEBVIEW_URL=")) {
      envContent = envContent.replace(
        /EXPO_PUBLIC_WEBVIEW_URL=.*/,
        `EXPO_PUBLIC_WEBVIEW_URL=${webviewUrl}`
      );
    } else {
      envContent += `\nEXPO_PUBLIC_WEBVIEW_URL=${webviewUrl}`;
    }

    fs.writeFileSync(envPath, envContent);
    console.log(`Updated .env with EXPO_PUBLIC_WEBVIEW_URL=${webviewUrl}`);
  }
}

updateEnvFile();
