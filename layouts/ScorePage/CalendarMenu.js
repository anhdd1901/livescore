import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import CalendarDateButton from '../../components/CalendarDateButton';

export default function CalendarMenu() {
  const calendarList = useSelector(state => state.calendarList);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}>
      <View
        style={{
          height: 20,
          backgroundColor: 'white',
          borderRadius: 3,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#0a0a0a',
            fontWeight: 'bold',
            fontSize: 12,
            paddingHorizontal: 5,
          }}>
          LIVE
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flex: 1,
          marginHorizontal: 10,
        }}>
        {calendarList.dateList.map((value, index) => (
          <CalendarDateButton
            isChosen={index === calendarList.chosenDate}
            Date={value}
            Index={index}
            key={value}
          />
        ))}
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 24, height: 24, tintColor: 'white'}}
          source={require('./../../icons/calendar-interface-symbol-tool.png')}></Image>
        <Image
          style={{width: 7, height: 7, tintColor: 'white', marginLeft: 3}}
          source={require('./../../icons/caret-down.png')}></Image>
      </View>
    </View>
  );
}
