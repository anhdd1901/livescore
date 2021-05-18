import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {SafeAreaView} from 'react-native';

import reducers from './reducers';
import Header from './layouts/Header';
import BodyAndFooter from './layouts/BodyAndFooter';

export default function App() {
  return (
    <Provider store={configureStore({reducer: reducers})}>
      <SafeAreaView
        style={{
          backgroundColor: '#0c0c0c',
          flex: 1,
        }}>
        <Header />
        <BodyAndFooter />
      </SafeAreaView>
    </Provider>
  );
}
