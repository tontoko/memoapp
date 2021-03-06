import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import {NavigationActions} from 'react-navigation';

class LoginScreen extends React.Component {
    state = {
        email: 'test@test.com',
        password: 'testtest',
    }

    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                // 履歴をリセットしindex番号に遷移
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'Home'}),
                    ],
                });
                this.props.navigation.dispatch(resetAction);
            })
            .catch(function (error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                // ...
            });
    }

    handlePress() {
        this.props.navigation.navigate('SignUp');
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログイン
                </Text>
                <TextInput 
                style={styles.input} 
                value={this.state.email} 
                onChangeText={(text) => { this.setState({ email: text }); }}  
                autoCapitalize="none"              
                autoCorrect={false}
                placeholder="Email Address"
                underlineColorAndroid="transparent"
                />
                <TextInput 
                style={styles.input} 
                value={this.state.password} 
                onChangeText={(text) => {this.setState({password:text});}}
                placeholder="Password"
                secureTextEntry
                underlineColorAndroid="transparent"
                />
                <TouchableHighlight style={styles.button} onPress={() => { this.handleSubmit() }} underlayColor="#C70F66">
                    <Text style={styles.buttonTitle}>ログインする</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.signUp} onPress={this.handlePress.bind(this)}>
                    <Text style={styles.signUpText}>メンバー登録する</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
    },
    input: {
        backgroundColor: '#eee',
        height: 40,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 8,
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
    signUp: {
        marginTop: 16,
        alignSelf: 'center',
    },
    signUpText: {
        fontSize: 16,
    }
});

export default LoginScreen;