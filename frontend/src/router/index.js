import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './main';

const Router = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}

export default Router;