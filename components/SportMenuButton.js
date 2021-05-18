import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {choseSport} from '../reducers/sportList';
export default function SportMenuButton({sportName}) {
  const dispatch = useDispatch();
  const chosen =
    sportName === useSelector(state => state.sportList).chosenSport;
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(choseSport(sportName));
      }}
      activeOpacity={0.75}
      style={{
        marginRight: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 18,
        backgroundColor: chosen ? 'white' : '#171717',
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: chosen ? '#0a0a0a' : 'white',
        }}>
        {sportName}
      </Text>
    </TouchableOpacity>
  );
}
