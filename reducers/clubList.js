import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Wolverhampton Wanderers',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t39.png',
  },
  {
    name: 'Leicester',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t13.png',
  },
  {
    name: 'Chelsea',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t8.png',
  },
  {
    name: 'Crystal Palace',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t31.png',
  },
  {
    name: 'Manchester United',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t1.png',
  },
  {
    name: 'West Brom',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t35.png',
  },
  {
    name: 'Tottenham',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t6.png',
  },
  {
    name: 'Everton',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t11.png',
  },
  {
    name: 'Arsenal',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t3.png',
  },
  {
    name: 'Southampton',
    icon: 'https://resources.premierleague.com/premierleague/badges/70/t20.png',
  },
];

const clubList = createSlice({
  name: 'clubList',
  initialState: initialState,
  reducers: {
    actionName: (state, action) => ({
      ...state,
    }),
  },
});

const {actions, reducer} = clubList;
export const {actionName} = actions;
export default reducer;
