import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

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
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },

}, {
    navigationOptions: {
      headerTitle: "Memot",
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