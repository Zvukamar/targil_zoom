import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Products Screen</Text>
        </View>
    )
}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    }
});