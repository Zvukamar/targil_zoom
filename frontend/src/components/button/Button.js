import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ style, title, withArrow, onPress = () => { }, disabled }) => {
    const buttonStyle = StyleSheet.flatten([
        styles.buttonContainer,
        style,
    ]);
    return (
        <TouchableOpacity
            activeOpacity={.7}
            style={buttonStyle}
            disabled={disabled}
            onPress={onPress}>
            <Text style={styles.buttonTitle}>{title}</Text>
            {withArrow && <Text style={styles.buttonTitle}>&#8594;</Text>}
        </TouchableOpacity>
    );
}

export default Button;

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    bgColor: PropTypes.string,
    withArrow: PropTypes.bool,
    style: PropTypes.object
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    buttonTitle: {
        fontSize: 14,
    }
});