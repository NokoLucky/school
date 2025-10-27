import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.extralingual.extralingual',  // Change this from 'io.ionic.starter'
  appName: 'Extralingual',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    iosScheme: 'extralingual'  // Important for iOS URL handling
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,  // Set to your preference
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: false,
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com"]  // Add other providers as needed
    }
  }
};

export default config;