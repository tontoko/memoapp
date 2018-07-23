import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.memoEditInput} multiline={true} value="test" />
                <CircleButton onPress={() => { this.props.navigation.goBack(); }}>
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