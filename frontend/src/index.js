import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import store from './store';
import Router from './router';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})