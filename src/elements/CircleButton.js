import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.component {
    render() {
        return (
            <View style={styles.memoAddButton}>
                <Text style={styles.memoAddButtonTitle}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoAddButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#E31676',
        borderRadius: 24,
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    memoAddButtonTitle: {
        fontSize: 32,
        textAlignVertical: "center",
        textAlign: "center",
        color: '#fff',
    },
});

export default CircleButton;