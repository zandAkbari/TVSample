# This repository is a cross-platform app for TVs That was tested on Web and Tizen and AndroidTV




### This repository works on Web and Tizen and AndroidTV well however it may work on webOS and tvOS well or need a tiny change to work on these platforms 
###I didn't have TVs or simulators of webOS and tvOS to test them

- To work with the project pull the git repository then install node module
## Run

```sh

# cd into your <project-directory>
$ cd TVSample

# Run Web/Ios/Android development
# Web
$ npm run web

# IOS (simulator)
$ npm run ios

# Android (connected device)
$ npm run android

```
## Build

```sh
# Web
$ npm run build
# Copy the build folder and use from necessary files of it for creating Web or Tizen or webOS app
$ open ./build

# Android 
# Run the build
$ cd android && ./gradlew assembleRelease

# Open apk folder to find the release apk
$ open ./android/app/build/outputs/apk
```

- For web realize, the project was built assuming it is hosted at /.
  You can control this with the homepage field in your package.json.



## Folder structure

```
myApp
├── android (When opening with Android studio, open this folder)
│   └── android project files
├── ios (When opening with Xcode, open this folder)
│   └── ios project files
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    └── project code
```

## Resources

- [React Native for Web (react-native-web)](https://github.com/necolas/react-native-web)
- [React](https://reactjs.org/)
- [React Native](http://facebook.github.io/react-native/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Create React Native App](https://github.com/react-community/create-react-native-app)
