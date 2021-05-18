import React from 'react';
import {View, TouchableHighlight, Image, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        height: 55,
      }}>
      <TouchableHighlight>
        <Image
          style={styles.topButton}
          source={require('./../icons/settings.png')}
        />
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              lineHeight: 25,
            }}>
            Livescore
          </Text>
          <Image
            style={{
              tintColor: 'white',
              height: 15,
              width: 15,
              marginLeft: 5,
            }}
            source={require('./../icons/trademark.png')}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={styles.topButton}
          source={require('./../icons/search.png')}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  topButton: {
    tintColor: 'white',
    height: 25,
    width: 25,
  },
});
