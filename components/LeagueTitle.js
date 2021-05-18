import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function LeagueTitle({league}) {
  return (
    <View
      style={{
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            style={{height: 20, width: 30, marginRight: 20, borderRadius: 5}}
            source={{uri: league.icon}}></Image>
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              marginBottom: 5,
            }}>
            {league.name}
          </Text>
          <Text style={{color: 'white', fontSize: 14}}>{league.country}</Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../icons/right-arrow.png')}
          style={{tintColor: 'white', height: 15, width: 15}}></Image>
      </View>
    </View>
  );
}
