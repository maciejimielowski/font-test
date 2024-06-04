import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const questaSans = require('./assets/fonts/QuestaSans-Regular.ttf');
  const questaRegular = require('./assets/fonts/QuestaSans-Regular.ttf');
  const questaBlack = require('./assets/fonts/QuestaSans-Black.ttf');
  const questaBold = require('./assets/fonts/QuestaSans-Bold.ttf');
  const questaLight = require('./assets/fonts/QuestaSans-Light.ttf');
  const questaMedium = require('./assets/fonts/QuestaSans-Medium.ttf');
  const questaItalic = require('./assets/fonts/QuestaSans-LightItalic.ttf');

  const [fontsLoaded, fontError] = useFonts({
    // Arial: require('./assets/fonts/Arial.ttf'),
    // NewTransport: require('./assets/fonts/NewTransport-Regular.ttf'),
    // 'NewTransport-bold': require('./assets/fonts/NewTransport-Bold.ttf'),
    // 'NewTransport-medium': require('./assets/fonts/NewTransport-Medium.ttf'),
    // 'questa-sans': questaSans,
    // 'questa-sans-regular': questaRegular,
    // 'questa-sans-black': questaBlack,
    // 'questa-sans-bold': questaBold,
    // 'questa-sans-light': questaLight,
    // 'questa-sans-medium': questaMedium,
    'questa-sans-light-italic': questaItalic,
  });

  if (!fontsLoaded) {
    return null
  }

  if (fontError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
        <Text style={{ fontSize: 32 }}>Fonts</Text>
        <Text style={{ fontFamily: 'arial', fontSize: 32 }}>Fonts arial</Text>
        <Text style={{ fontFamily: 'NewTransport', fontSize: 32 }}>
          Fonts NewTransport
        </Text>
        <Text style={{ fontFamily: 'NewTransport-bold', fontSize: 32 }}>
          Fonts NewTransport-bold
        </Text>
        <Text style={{ fontFamily: 'NewTransport-medium', fontSize: 32 }}>
          Fonts NewTransport-medium
        </Text>
        <Text style={{ fontFamily: 'questa-sans', fontSize: 32 }}>
          Fonts questa-sans
        </Text>
        <Text style={{ fontFamily: 'questa-sans-regular', fontSize: 32 }}>
          Fonts questa-sans-regular
        </Text>
        <Text style={{ fontFamily: 'questa-sans-black', fontSize: 32 }}>
          Fonts questa-sans-black
        </Text>
        <Text style={{ fontFamily: 'questa-sans-bold', fontSize: 32 }}>
          Fonts questa-sans-bold
        </Text>
        <Text style={{ fontFamily: 'questa-sans-light', fontSize: 32 }}>
          Fonts questa-sans-light
        </Text>
        <Text style={{ fontFamily: 'questa-sans-medium', fontSize: 32 }}>
          Fonts questa-sans-medium
        </Text>
        <Text
          style={{
            fontFamily: 'questa-sans-light-italic',
            fontSize: 32,
          }}
        >
          Fonts questa-sans-light-italic
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
