import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Navigation from './navigation/Navigator'


const fetchFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [ fontLoaded, setFontLoaded ] = useState(false)
  
  if (!fontLoaded) {
    return (
      <View>
        <AppLoading
          startAsync={fetchFont}
          onFinish={() => setFontLoaded(true)}
          onError={(err) => console.log(err)}
        />
      </View>
    )
  }
  return <Navigation/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'open-sans-bold'
  },
});
