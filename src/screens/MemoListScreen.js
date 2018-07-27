import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoListScreen extends React.Component {
    state = {
        memoList: [],
    }
    componentWillMount() {
        const {currentUser} = firebase.auth();
        const db = firebase.firestore();
        const settings = {timestampsInSnapshots: true};
        db.settings(settings);
        db.collection(`users/${currentUser.uid}/memos`)
        .get()
        .then((snapShot) => {
            const memoList = [];
            snapShot.forEach((doc) => {
                memoList.push({ ...doc.data(), key: doc.id });
                // body: '', createdOn: '', key: doc.id と同じ
            });
            // this.setState({ memoList: memoList });
            this.setState({ memoList });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handlePress() {
        this.props.navigation.navigate('MemoCreate');
    }

    render() {
        return (
            <View style={styles.container}>

                <MemoList　memoList={this.state.memoList} navigation={this.props.navigation} />

                <CircleButton onPress={() => { this.handlePress() }}>{'\uf067'}</CircleButton>

            </View>
        );
    }
}

// this.props.navigation.navigate('MemoEdit');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFDF6',
    },
});


export default MemoListScreen;