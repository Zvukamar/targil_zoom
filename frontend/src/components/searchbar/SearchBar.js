import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { debounce } from "lodash";

import * as colors from '../../utilities/colors';
import ListLoader from '../listLoader';

const SearchBar = ({ placeholder, onChangeText, onFocus }) => {
    const [loading, setLoading] = useState(false);

    const updateParent = useCallback(debounce((text) => {
        onChangeText(text);
        setLoading(false);
    }, 600), []);

    const handleOnChangeText = (text) => {
        setLoading(true);
        updateParent(text);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ flex: 1 }}
                placeholder={placeholder}
                maxLength={100}
                multiline={false}
                onChangeText={handleOnChangeText}
                onFocus={onFocus}
            />
            {loading && <ListLoader />}
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        padding: 20,
        borderBottomColor: colors.LIGHT_GRAY
    }
})