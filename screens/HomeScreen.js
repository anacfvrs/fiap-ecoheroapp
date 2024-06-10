import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import homeStyles from '../styles/homeStyles';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const challenges = [
  { id: 1, type: 'exercise', level: 'beginner', title: 'Atividade Física - Iniciante', image: require('../assets/exercise.png'), points: '800xp' },
  { id: 2, type: 'exercise', level: 'intermediate', title: 'Atividade Física - Intermediário', image: require('../assets/exercise.png'), points: '1200xp' },
  { id: 3, type: 'exercise', level: 'advanced', title: 'Atividade Física - Avançado', image: require('../assets/exercise.png'), points: '1500xp' },
  { id: 4, type: 'volunteering', level: null, title: 'Voluntariado', image: require('../assets/voluntariado.png'), points: '1500xp' },
  { id: 5, type: 'waste', level: null, title: 'Separação do Lixo', image: require('../assets/lixo.jpg'), points: '800xp' },
  { id: 6, type: 'gardening', level: null, title: 'Horta Doméstica', image: require('../assets/horta.png'), points: '1200xp' },
];

const HomeContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={homeStyles.container}>
        <Text style={homeStyles.title}>Desafios</Text>
        <View style={homeStyles.cards}>
          {challenges.map((challenge) => (
            <TouchableOpacity
              key={challenge.id}
              style={homeStyles.card}
              onPress={() => navigation.navigate('ChallengeDetail', { type: challenge.type, level: challenge.level })}
            >
              <Image source={challenge.image} style={homeStyles.cardImage} />
              <View style={homeStyles.cardContent}>
                <Text style={homeStyles.cardTitle}>{challenge.title}</Text>
                <Text style={homeStyles.cardPoints}>Pontos necessários: {challenge.points}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="HomeContent" component={HomeContent} />
    </Drawer.Navigator>
  );
}






