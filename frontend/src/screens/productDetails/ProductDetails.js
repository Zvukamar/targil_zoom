import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import Button from '../../components/button';

import * as colors from '../../utilities/colors';

const ProductDetailsScreen = ({ route, navigation }) => {
    const { item } = route.params
    const openUrl = async () => {
        try {
            await Linking.canOpenURL(item.url);
            Linking.openURL(item.url);
        } catch (err) {
            console.log({ err })
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView >
                {/* Item SKU Number */}
                {item?.sku && (
                    <Text style={styles.itemSKU}>
                        sku: {item?.sku}
                    </Text>
                )}

                {/* Image Container */}
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode='contain'
                        style={styles.itemImage}
                        width={300}
                        height={300}
                        source={item?.image ? { uri: item?.image } : require('../../images/image-not-found.png')}
                    />
                </View>

                {/* Details */}
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.itemName}>{item?.name}</Text>
                        <Text style={styles.itemManufacturer}>{item?.manufacturer}</Text>
                        {item?.price && <Text style={styles.itemPrice}>${item?.price}</Text>}
                        <Text style={{ textAlign: 'center' }}>
                            {item?.shipping > 0 ?
                                `shipping $${item?.shipping}` :
                                'Free shipping'}
                        </Text>
                    </View>

                    {/* Description */}
                    <View>
                        <Text style={styles.itemDescriptionTitle}>DESCRIPTION</Text>
                        <Text>{item?.description}</Text>
                    </View>
                </View>
            </ScrollView>

            <Button
                title='Continue to website'
                style={styles.button}
                onPress={openUrl}
            />
        </View>

    )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.WHITE
    },
    innerContainer: {
        flex: 1
    },
    itemDescriptionTitle: {
        marginVertical: 30
    },
    itemSKU: {
        fontSize: 12,
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    itemManufacturer: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 16
    },
    itemName: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    itemPrice: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 10
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImage: {
        height: 150,
        width: 100,
        marginBottom: 20
    },
    button: {
        marginTop: 20,
        minHeight: 40,
        backgroundColor: colors.PALE
    }
});