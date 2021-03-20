import React from 'react';
import { View, StyleSheet } from 'react-native';

import * as colors from '../../utilities/colors';

const ListItemSeperator = (props) => {
    return <View style={styles.seperator} />
}

export default ListItemSeperator;

const styles = StyleSheet.create({
    seperator: {
        height: 1,
        backgroundColor: colors.BLACK
    }
});