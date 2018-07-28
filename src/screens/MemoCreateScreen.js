import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoCreateScreen extends React.Component {
    state = {
        body: '',
    }

    handlePress() {
        const db = firebase.firestore();
        const settings = { timestampsInSnapshots: true };
        db.settings(settings);
        const {currentUser} = firebase.auth();

        db.collection(`users/${currentUser.uid}/memos`).add({
            body: this.state.body,
            createdOn: new Date(),
        })
            .then(() => {
                this.props.navigation.goBack();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                style={styles.memoEditInput} 
                multiline={true} value="test"
                value={this.state.body} 
                onChangeText={(text) => {this.setState({body: text});}}
                underlineColorAndroid="transparent"
                />
                <CircleButton onPress={() => { this.handlePress(); }}>
                    {'\uf00c'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        textAlignVertical: 'top',
    },
});

export default MemoCreateScreen;