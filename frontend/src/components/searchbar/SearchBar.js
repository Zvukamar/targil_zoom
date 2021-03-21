import React, { useCallback } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { debounce } from "lodash";

import * as colors from '../../utilities/colors';

const SearchBar = ({ placeholder, onChangeText, onFocus }) => {
    const handleOnChangeText = useCallback(debounce((text) => {
        onChangeText(text);
    }, 600), []);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                maxLength={100}
                multiline={false}
                onChangeText={handleOnChangeText}
                onFocus={onFocus}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 20,
        borderBottomColor: colors.LIGHT_GRAY
    }
})