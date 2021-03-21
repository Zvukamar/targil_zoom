import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItemSeperator from '../../components/listItemSeperator';
import ListLoader from '../../components/listLoader';
import { useNavigation } from '@react-navigation/native';

import ProductItem from '../../components/productItem';
import { fetchProducts, fetchProductsByName } from '../../utilities/api';
import * as colors from '../../utilities/colors';
import SearchBar from '../../components/searchbar/SearchBar';

const ProductsScreen = (props) => {
    const navigation = useNavigation();
    const [startIndex, setStartIndex] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');


    const fetchData = async () => {
        if (loading) return;
        setLoading(true);

        // initial fetch
        if (!text) {
            const _products = await fetchProducts(startIndex);
            setProducts(prevProducts => [...prevProducts, ..._products]);
            setStartIndex(prevIndex => prevIndex + _products.length);
        } else {
            const { data, lastIndex } = await fetchProductsByName(text, startIndex);
            setProducts(data);
            setStartIndex(lastIndex);
        }

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

    useEffect(() => {
        if (!text) {
            setLoading(false);
            setStartIndex(0);
            setProducts([]);
        } else {
            fetchData();
        }
    }, [text]);

    useEffect(() => {
        fetchData();
    }, [products]);

    const handleOnChangeText = async (text) => {
        setText(text);
    }

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder='Product search...'
                onChangeText={handleOnChangeText}
            />
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