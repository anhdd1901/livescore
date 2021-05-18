import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Premier league',
    country: 'Endland',
    icon: 'https://www.worldometers.info/img/flags/uk-flag.gif',
  },
  {
    name: 'Bundesliga',
    country: 'Germany',
    icon: 'https://www.worldometers.info/img/flags/small/tn_gm-flag.gif',
  },
  {
    name: 'LaLiga Santander',
    country: 'Spain',
    icon: 'https://www.worldometers.info/img/flags/sp-flag.gif',
  },
  {
    name: 'Serie A',
    country: 'Italy',
    icon: 'https://www.worldometers.info/img/flags/it-flag.gif',
  },
  {
    name: 'Ligue 1',
    country: 'France',
    icon: 'https://www.worldometers.info/img/flags/small/tn_fr-flag.gif',
  },
];

const leagueList = createSlice({
  name: 'leagueList',
  initialState: initialState,
  reducers: {
    actionName: (state, action) => ({
      ...state,
    }),
  },
});

const {actions, reducer} = leagueList;
export const {actionName} = actions;
export default reducer;
