import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Counter from './src/Counter';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, alignContent: 'center' }}>
        <Counter />
      </SafeAreaView>
    </>
  );
};


export default App;
