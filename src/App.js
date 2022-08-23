import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  Animated,
  Easing,
  useColorScheme,
  Linking,
} from 'react-native';
import logo from './logo.png';
import { Cart } from "./components/Cart.js";
const isNative = Platform.OS !== 'web';

const App = () => {
  const [wasRotated, setwasRotated] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;
  const isDarkMode = useColorScheme() === 'dark';

  const onPress = () => {
    setwasRotated(!wasRotated);
    Animated.timing(spinValue, {
      toValue: wasRotated ? 0 : 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.scrollView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Cart styles={cartStyles} >
          </Cart>
          <Text style={styles.title}>Create React Native Web App</Text>
          <Text style={styles.text}>
            Open up src/App.js to start working on your app!
          </Text>
          <Text style={styles.text}>
            Changes you make will automatically reload.
          </Text>
          {isNative && (
            <Text style={styles.text}>
              Shake your phone to open the developer menu.
            </Text>
          )}
          <Text
            style={styles.link}
            onPress={
              isNative
                ? () =>
                    Linking.openURL(
                      'https://github.com/necolas/react-native-web',
                    )
                : undefined
            }
            accessibilityRole="link"
            href="https://github.com/necolas/react-native-web"
            target="_blank">
            Click here to learn more about react native web
          </Text>

          <Pressable
            onPress={onPress}
            style={styles.button}
            underlayColor={'#0A84D0'}>
            <View>
              <Text style={styles.buttonText}>Rotate Logo</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
  link: {
    color: '#1B95E0',
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
const cartStyles = StyleSheet.create({
  cart:{
    width:300,
    height:500,
    display:"flex",
    flexDirection:"column",
    borderWidth:8,borderColor:"transparent",position:"relative"
  },
  imageBox:{
    borderColor:"transparent",borderWidth:8,
  },
  selectedCart:{
    borderColor:"rgb(253, 193, 60)",borderWidth:8,
  },
  // rgb(253, 193, 60)
  // rgb(238, 238, 238)
  focusedCrat:{
    borderColor:"rgb(238, 238, 238)",borderWidth:8,
  },
  logo: {
    width: "100%",
    height: 400,
  },
  name: {
    color: 'rgb(253, 193, 60)',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:"center",
    width:"100%",
    padding:10

  },
});
export default App;
