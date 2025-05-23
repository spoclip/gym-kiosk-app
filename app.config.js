const getPackageName = () => {
  switch (process.env.APP_ENV) {
    case "development":
      return "com.spoclipai.gymkioskapp.dev";
    case "preview":
      return "com.spoclipai.gymkioskapp.preview";
    case "production":
    default:
      return "com.spoclipai.gymkioskapp";
  }
};

const getAppName = () => {
  switch (process.env.APP_ENV) {
    case "development":
      return "스포클립 체육관용(dev)";
    case "preview":
      return "스포클립 체육관용(preview)";
    case "production":
    default:
      return "스포클립 체육관용";
  }
};

module.exports = ({ config }) => ({
  ...config,
  name: getAppName(),
  slug: "gym-kiosk-app",
  version: "1.0.2",
  orientation: "landscape",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    ...config.ios,
    supportsTablet: true,
  },
  android: {
    ...config.android,
    package: getPackageName(),
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    [
      "expo-screen-orientation",
      {
        initialOrientation: "LANDSCAPE",
      },
    ],
    "expo-asset",
  ],
  extra: {
    eas: {
      projectId: "0b6fecd2-acdd-4bee-843d-46da1f310d49",
    },
  },
  owner: "spoclip-ai",
  updates: {
    url: "https://u.expo.dev/0b6fecd2-acdd-4bee-843d-46da1f310d49",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
