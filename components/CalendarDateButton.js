import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {choseDate} from '../reducers/calendarList';

const DateTransferToPutOnCalendar = InputDate => {
  let TODAY = new Date();
  isToday =
    TODAY.getMonth() === InputDate.getMonth() &&
    TODAY.getDate() === InputDate.getDate();
  const dayArray = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const monthArray = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const dayInWeek = dayArray[InputDate.getDay()];
  const dayInMonth = InputDate.getDate();
  const Month = monthArray[InputDate.getMonth()];
  return {isToday, dayInWeek, dayInMonth, Month};
};

export default function CalendarDateButton({isChosen, Index, Date}) {
  const TransferedDate = DateTransferToPutOnCalendar(Date);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        dispatch(choseDate(Index));
      }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={[
          isChosen ? styles.active : styles.inActive,
          {fontSize: 12, lineHeight: 12, marginBottom: 5},
        ]}>
        {TransferedDate.isToday ? 'TODAY' : TransferedDate.dayInWeek}
      </Text>
      <Text
        style={[
          isChosen ? styles.active : styles.inActive,
          {fontSize: 10, lineHeight: 10},
        ]}>
        {`${TransferedDate.dayInMonth} ${TransferedDate.Month}`}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  active: {color: '#fe8708', fontWeight: 'bold'},
  inActive: {color: '#a9a9a9'},
});
