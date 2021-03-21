import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../utilities/colors';

const ListEmpty = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default ListEmpty;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: colors.WHITE
    }
});