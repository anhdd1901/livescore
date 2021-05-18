import {createSlice} from '@reduxjs/toolkit';

const TODAY = new Date();
const aDay = 1000 * 60 * 60 * 24;
const initialState = {
  dateList: [
    new Date(TODAY.setDate(TODAY.getDate() - 2)),
    new Date(TODAY.setDate(TODAY.getDate() + 1)),
    new Date(TODAY.setDate(TODAY.getDate() + 1)),
    new Date(TODAY.setDate(TODAY.getDate() + 1)),
    new Date(TODAY.setDate(TODAY.getDate() + 1)),
  ],
  chosenDate: 2,
};

const calendarList = createSlice({
  name: 'calendarList',
  initialState: initialState,
  reducers: {
    choseDate: (state, action) => {
      return {
        ...state,
        chosenDate: action.payload,
      };
    },
  },
});

const {actions, reducer} = calendarList;
export const {choseDate} = actions;
export default reducer;
