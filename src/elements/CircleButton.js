import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import brands from '../../assets/fonts/fa-brands-400.ttf';
import regular from '../../assets/fonts/fa-regular-400.ttf';
import solid from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            brands: brands,
            regular: regular,
            solid: solid,
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        // const style = this.props.style;
        const { style, color, onPress } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return (
            // 配列でスタイルを指定すると後ろのもので上書きされる
            <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
                <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                                {this.props.children}
                            </Text>
                        ) : null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 52,
    },
    circleButton: {
        marginBottom: 4,
        height: 48,
        backgroundColor: '#E31676',
        borderRadius: 24,
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleButtonTitle: {
        fontFamily: 'solid',
        fontSize: 24,
        color: '#fff',
    },
});

export default CircleButton;