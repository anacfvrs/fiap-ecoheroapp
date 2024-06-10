import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import rankingStyles from '../styles/rankingStyles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Drawer = createDrawerNavigator();

const RankingContent = ({ navigation }) => {
  const rankings = [
    { id: 1, name: 'Nome Sobrenome 1', points: '15000xp', avatar: require('../assets/avatar.png') },
    { id: 2, name: 'Nome Sobrenome 2', points: '14500xp', avatar: require('../assets/avatar.png') },
    { id: 3, name: 'Nome Sobrenome 3', points: '14000xp', avatar: require('../assets/avatar.png') },
    { id: 4, name: 'Nome Sobrenome 3', points: '13000xp', avatar: require('../assets/avatar.png') },
    { id: 5, name: 'Nome Sobrenome 3', points: '12000xp', avatar: require('../assets/avatar.png') },
    { id: 6, name: 'Nome Sobrenome 3', points: '10000xp', avatar: require('../assets/avatar.png') },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={rankingStyles.container}>
        <Text style={rankingStyles.title}>Ranking</Text>
        <ScrollView style={rankingStyles.rankingList}>
          {rankings.map((user) => (
            <View key={user.id} style={rankingStyles.rankingItem}>
              <Image source={user.avatar} style={rankingStyles.avatar} />
              <View style={rankingStyles.userInfo}>
                <Text style={rankingStyles.username}>{user.name}</Text>
                <Text style={rankingStyles.points}>{user.points}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default function RankingScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="RankingContent" component={RankingContent} />
    </Drawer.Navigator>
  );
}

