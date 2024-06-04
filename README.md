### Expo fonts bug

```
  "dependencies": {
    "expo": "~51.0.9",
    "expo-font": "^12.0.6",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.1"
  }
```

Created based on current Expo template, I've only added expo-font, font files and loading fonts.
The app crashes on start just after loading fonts (variable `fontsLoaded` from `useFonts` changes to true).
