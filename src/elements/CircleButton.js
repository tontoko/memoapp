import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
    render() {
        // const style = this.props.style;
        const { style, color } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return (
            // 配列でスタイルを指定すると後ろのもので上書きされる
            <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
                <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton: {
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
        elevation: 5,
    },
    circleButtonTitle: {
        fontSize: 32,
        textAlignVertical: "center",
        textAlign: "center",
        color: '#fff',
    },
});

export default CircleButton;