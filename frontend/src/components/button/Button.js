import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import * as colors from '../../utilities/colors';

const Button = ({ title, onPress = () => { }, disabled, bgColor = colors.PALE }) => {
    const buttonStyle = StyleSheet.flatten([
        styles.buttonContainer,
        { backgroundColor: bgColor }
    ]);
    return (
        <TouchableOpacity
            style={buttonStyle}
            disabled={disabled}
            onPress={onPress}>
            <Text style={styles.buttonTitle}>{title}</Text>
            <Text style={styles.buttonTitle}>&#8594;</Text>
        </TouchableOpacity>
    );
}

export default Button;

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    bgColor: PropTypes.string
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.BLACK,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    buttonTitle: {
        fontSize: 14,
    }
});