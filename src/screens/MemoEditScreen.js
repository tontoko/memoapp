import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoEditScreen extends React.Component {
    state = {
        body: '',
        key: '',
    }

    componentWillMount() {
     const {params} = this.props.navigation.state;
     this.setState({
            body: params.memo.body, 
            key: params.memo.key,
        });  
    }

    handlePress() {
        const db = firebase.firestore();
        const settings = { timestampsInSnapshots: true };
        db.settings(settings);
        const { currentUser } = firebase.auth();
        const newDate = new Date();

        db.collection(`users/${currentUser.uid}/memos`)
            .doc(this.state.key)
            .update({
                body: this.state.body,
                createdOn: newDate,
            })
                .then((docRef) => {
                    console.log('succsess');
                    const {navigation} = this.props;
                    navigation.state.params.returnMemo({
                        body: this.state.body,
                        key: this.state.key,
                        createdOn: newDate,
                    });
                    navigation.goBack();
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
                    multiline={true} 
                    value={this.state.body} 
                    onChangeText={(text) => {this.setState({body: text});}}
                    underlineColorAndroid="transparent"
                />
                <CircleButton onPress={ this.handlePress.bind(this) }>
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

export default MemoEditScreen;