import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      league: 'Premier league',
      team1: 'Arsenal',
      score1: '1',
      team2: 'Tottenham',
      score2: '2',
      date: new Date(2021, 4, 18, 10, 0),
      isFavourite: false,
      id: 1,
    },
    {
      league: 'Premier league',
      team1: 'Southampton',
      score1: '3',
      team2: 'Everton',
      score2: '2',
      date: new Date(2021, 4, 18, 10, 0),
      isFavourite: false,
      id: 2,
    },
    {
      league: 'Premier league',
      team1: 'West Brom',
      score1: '0',
      team2: 'Manchester United',
      score2: '2',
      date: new Date(2021, 4, 18, 14, 0),
      isFavourite: true,
      id: 3,
    },
    {
      league: 'Bundesliga',
      team1: 'Chelsea',
      score1: '',
      team2: 'Crystal Palace',
      score2: '',
      date: new Date(2021, 4, 18, 22, 0),
      isFavourite: false,
      id: 4,
    },
    {
      league: 'Bundesliga',
      team1: 'Wolverhampton Wanderers',
      score1: '',
      team2: 'Leicester',
      score2: '',
      date: new Date(2021, 4, 18, 23, 0),
      isFavourite: false,
      id: 5,
    },
  ],
};

const gameList = createSlice({
  name: 'gameList',
  initialState: initialState,
  reducers: {
    choseFavourite: (state, action) => ({
      ...state,
      // list: state.list.map(
      //   value =>
      //     (value.isFavourite =
      //       action.payload === value.id
      //         ? !value.isFavourite
      //         : value.isFavourite),
      // ),
    }),
  },
});

const {actions, reducer} = gameList;
export const {choseFavourite} = actions;
export default reducer;
