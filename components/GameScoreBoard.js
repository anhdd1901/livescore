import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {choseFavourite} from '../reducers/gameList';

export default function GameScoreBoard({game, team1, team2}) {
  const NOW = new Date();
  const dispatch = useDispatch();
  console.log(team2);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#171717',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <View style={{width: 60, alignItems: 'center'}}>
          <Text style={{fontSize: 14, color: '#a9a9a9'}}>
            {NOW > game.date
              ? 'FT'
              : `${game.date.getHours()}:${
                  game.date.getMinutes() < 10
                    ? `0${game.date.getMinutes()}`
                    : game.date.getMinutes()
                }`}
          </Text>
        </View>

        <View style={{marginVertical: 10, flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 7,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.clubLogo}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: team1.icon}}></Image>
              </View>
              <Text style={styles.clubName}>{team1.name}</Text>
            </View>
            <Text style={styles.score}>{game.score1}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.clubLogo}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{uri: team2.icon}}></Image>
              </View>
              <Text style={styles.clubName}>{team2.name}</Text>
            </View>
            <Text style={styles.score}>{game.score2}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          dispatch(choseFavourite(game.id));
        }}
        activeOpacity={0.75}
        style={{width: 60, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            tintColor: game.isFavourite ? '#fe8708' : 'white',
            width: 20,
            height: 20,
          }}
          source={
            game.isFavourite
              ? require('../icons/Navigation-Icons/Favourites.png')
              : require('../icons/Navigation-Icons/Favourites-unfocused.png')
          }></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  clubName: {
    color: 'white',
    fontSize: 16,
  },
  clubLogo: {
    width: 40,
    alignItems: 'flex-start',
  },
});
