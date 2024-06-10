import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Switch, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import rewardsStyles from '../styles/rewardsStyles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Drawer = createDrawerNavigator();

const rewards = [
  { id: 'reward1', name: 'EchoDot', points: '10.000xp', image: require('../assets/echodot.jpg') },
  { id: 'reward2', name: 'Day Off', points: '20.000xp', image: require('../assets/day-off.jpg') },
  { id: 'reward3', name: 'Jantar Maní 2 Pessoas', points: '30.000xp', image: require('../assets/jantar.png') },
  { id: 'reward4', name: 'Chá da Tarde Tangará', points: '20.000xp', image: require('../assets/tangara.jpg') },
  { id: 'reward5', name: 'Spa Day', points: '25.000xp', image: require('../assets/spa.jpg') },
];

const RewardsContent = ({ navigation }) => {
  const [unlockedRewards, setUnlockedRewards] = useState({});

  useEffect(() => {
    const storedRewards = rewards.reduce((acc, reward) => {
      acc[reward.id] = localStorage.getItem(reward.id) === 'true';
      return acc;
    }, {});
    setUnlockedRewards(storedRewards);
  }, []);

  const handleToggle = (rewardId) => {
    setUnlockedRewards((prevState) => {
      const newState = { ...prevState, [rewardId]: !prevState[rewardId] };
      localStorage.setItem(rewardId, newState[rewardId]);
      return newState;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={rewardsStyles.container}>
        <Text style={rewardsStyles.title}>Recompensas</Text>
        <View style={rewardsStyles.cards}>
          {rewards.map((reward) => (
            <View key={reward.id} style={rewardsStyles.card}>
              <Image source={reward.image} style={rewardsStyles.cardImage} />
              <View style={rewardsStyles.cardContent}>
                <Text style={rewardsStyles.cardTitle}>{reward.name}</Text>
                <Text style={rewardsStyles.cardPoints}>Pontos necessários: {reward.points}</Text>
                <View style={rewardsStyles.switchContainer}>
                  <Text style={rewardsStyles.toggleText}>
                    {unlockedRewards[reward.id] ? 'Recompensa Desbloqueada' : 'Desbloquear Recompensa'}
                  </Text>
                  <Switch
                    value={unlockedRewards[reward.id]}
                    onValueChange={() => {
                      if (!unlockedRewards[reward.id]) {
                        Alert.alert('Recompensa desbloqueada!');
                      }
                      handleToggle(reward.id);
                    }}
                    disabled={unlockedRewards[reward.id]}
                    trackColor={{ false: '#767577', true: '#ffcc00' }}
                    thumbColor={unlockedRewards[reward.id] ? '#ffcc00' : '#f4f3f4'}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default function RewardsScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="RewardsContent" component={RewardsContent} />
    </Drawer.Navigator>
  );
}
