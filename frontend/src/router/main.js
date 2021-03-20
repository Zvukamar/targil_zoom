import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MAIN_STACK_NAMES } from './names';
import Screens from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={MAIN_STACK_NAMES.PRODUCTS}>
            <Stack.Screen
                name={MAIN_STACK_NAMES.PRODUCTS}
                component={Screens.ProductsScreen}
            />
            <Stack.Screen
                name={MAIN_STACK_NAMES.PRODUCT_DETAIL}
                component={Screens.ProductDetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default MainStack;