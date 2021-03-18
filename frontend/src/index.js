import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import store from './store';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <Text>App</Text>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
