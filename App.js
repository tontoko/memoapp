import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>

//         <Appbar />

//         <SignupScreen />

//         {/* <LoginScreen /> */}

//         {/* <MemoEditScreen /> */}

//         {/* <MemoListScreen /> */}

//         {/* <MemoDetailScreen /> */}

//       </View>
//     );
//   }
// }

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },

}, {
    navigationOptions: {
      headerTitle: "Memot",
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
        alignSelf: 'center',
      },
    },
  })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFDF6',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 80,
//   },
// });

export default App;