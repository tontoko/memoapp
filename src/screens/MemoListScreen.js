import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
    handlePress() {
        const {params} = this.props.navigation.state;
        this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
    }

    render() {
        return (
            <View style={styles.container}>

                <MemoList navigation={this.props.navigation} />

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