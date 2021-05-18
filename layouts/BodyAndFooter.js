import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ScorePage from '../layouts/ScorePage';
import FavouritePage from '../layouts/FavouritePage';
import VideoPage from '../layouts/VideoPage';
import NewsPage from '../layouts/NewsPage';

const BodyAndFooter = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fe8708',
          inactiveTintColor: '#a9a9a9',
          activeBackgroundColor: '#0c0c0c',
          inactiveBackgroundColor: '#0c0c0c',
        }}>
        <Tab.Screen
          name="Scores"
          component={ScorePage}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={require('../icons/Navigation-Icons/Scores.png')}
                style={[
                  styles.BottomNavigationButton,
                  {
                    tintColor: color,
                  },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritePage}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../icons/Navigation-Icons/Favourites.png')
                    : require('../icons/Navigation-Icons/Favourites-unfocused.png')
                }
                style={[
                  styles.BottomNavigationButton,
                  {
                    tintColor: color,
                  },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Watch"
          component={VideoPage}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../icons/Navigation-Icons/Watch.png')
                    : require('../icons/Navigation-Icons/Watch-unfocused.png')
                }
                style={[
                  styles.BottomNavigationButton,
                  {
                    tintColor: color,
                  },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsPage}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../icons/Navigation-Icons/News.png')
                    : require('../icons/Navigation-Icons/News-unfocused.png')
                }
                style={[
                  styles.BottomNavigationButton,
                  {
                    tintColor: color,
                  },
                ]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  BottomNavigationButton: {
    width: 20,
    height: 20,
    marginBottom: -10,
  },
});

export default BodyAndFooter;
