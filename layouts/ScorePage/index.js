import React from 'react';
import Divider from './../../components/Divider';
import {ScrollView} from 'react-native';
import GameScoreBoard from '../../components/GameScoreBoard';
import LeagueTitle from '../../components/LeagueTitle';

import SportMenu from './SportMenu';
import CalendarMenu from './CalendarMenu';
import {useSelector} from 'react-redux';

export default function index() {
  const leagueList = useSelector(state => state.leagueList);
  const gameList = useSelector(state => state.gameList.list);
  const clubList = useSelector(state => state.clubList);
  return (
    <ScrollView style={{backgroundColor: '#0c0c0c'}}>
      <SportMenu />
      <CalendarMenu />
      <Divider />

      {leagueList.map(leagueInfo => {
        return (
          <>
            <LeagueTitle key={leagueInfo.name} league={leagueInfo} />
            {gameList
              .filter(game => game.league === leagueInfo.name)
              .map(gameInfo => (
                <GameScoreBoard
                  key={gameInfo.id}
                  game={gameInfo}
                  team1={
                    clubList.filter(club => club.name === gameInfo.team1)[0]
                  }
                  team2={
                    clubList.filter(club => club.name === gameInfo.team2)[0]
                  }
                />
              ))}
          </>
        );
      })}
    </ScrollView>
  );
}
