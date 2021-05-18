import {combineReducers} from 'redux';

import sportList from './sportList';
import calendarList from './calendarList';
import gameList from './gameList';
import clubList from './clubList';
import leagueList from './leagueList';

export default combineReducers({
  sportList,
  calendarList,
  gameList,
  clubList,
  leagueList,
});
