import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from '../button';
import { MAIN_STACK_NAMES } from '../../router/names';

const ProductItem = ({ item, navigation }) => {
    const handleOnPress = () => {
        navigation.navigate(MAIN_STACK_NAMES.PRODUCT_DETAIL, { item })
    }
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleOnPress}
            style={styles.itemContainer}>
            <View style={styles.innerContainerLeft}>
                <View>
                    {item?.sku && <Text style={styles.itemSKU}>sku: {item?.sku}</Text>}
                    <Text style={styles.itemName}>{item?.name}</Text>
                </View>
                {item?.price && <Text style={styles.itemPrice}>${item?.price}</Text>}
                <Button title='Buy Now' disabled />
            </View>
            <View style={styles.innerContainerRight}>
                <Image
                    resizeMode='contain'
                    style={styles.itemImage}
                    width={100}
                    height={150}
                    source={item?.image ? { uri: item?.image } : require('../../images/image-not-found.png')}
                />
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    innerContainerLeft: {
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 10
    },
    innerContainerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    itemSKU: {
        fontSize: 12
    },
    itemName: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    itemPrice: {
        fontWeight: 'bold',
        marginVertical: 10
    },
    itemImage: {
        height: 150,
        width: 100
    }
});