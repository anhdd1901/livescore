import React from 'react';
import {View, Text} from 'react-native';

export default function Divider() {
  return (
    <View
      style={{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        opacity: 0.7,
      }}></View>
  );
}
