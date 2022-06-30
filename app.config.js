import "dotenv/config";

export default {
  expo: {
    name: "book-app",
    slug: "book-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",

    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,

      firebaseDataBaseUrl: process.env.FIREBASE_DATABASE_URL,

      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,

      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,

      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
};
