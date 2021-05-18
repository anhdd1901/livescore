import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: ['Football', 'Hockey', 'Basketball', 'Tennis', 'Criket'],
  chosenSport: 'Football',
};

const sportList = createSlice({
  name: 'sportList',
  initialState: initialState,
  reducers: {
    choseSport: (state, action) => ({
      ...state,
      chosenSport: action.payload,
    }),
  },
});

const {actions, reducer} = sportList;
export const {choseSport} = actions;
export default reducer;
