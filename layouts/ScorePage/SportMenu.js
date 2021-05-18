import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';

import SportMenuButton from '../../components/SportMenuButton';

export default function SportMenu() {
  const sportList = useSelector(state => state.sportList);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
        {sportList.list.map(value => (
          <SportMenuButton key={value} sportName={value} />
        ))}
      </View>
    </ScrollView>
  );
}
