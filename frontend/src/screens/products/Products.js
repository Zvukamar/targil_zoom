import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItemSeperator from '../../components/listItemSeperator';
import ListLoader from '../../components/listLoader';
import { useNavigation } from '@react-navigation/native';

import ProductItem from '../../components/productItem';
import { fetchProducts } from '../../utilities/api';
import * as colors from '../../utilities/colors';

const ProductsScreen = (props) => {
    const navigation = useNavigation();
    const [startIndex, setStartIndex] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        if (loading) return;

        setLoading(true);
        const _products = await fetchProducts(startIndex);;
        setProducts(prevProducts => [...prevProducts, ..._products]);
        setStartIndex(prevIndex => prevIndex + _products.length);
        setLoading(false);
    }

    const renderItem = ({ item }) => {
        return (
            <ProductItem
                item={item}
                navigation={navigation}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                ItemSeparatorComponent={ListItemSeperator}
                renderItem={renderItem}
                onEndReached={fetchData}
                onEndReachedThreshold={10}
                keyExtractor={item => item.sku.toString()}
                ListFooterComponent={ListLoader}
            />
        </View>
    )
}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    }
});