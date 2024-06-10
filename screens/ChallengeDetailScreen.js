import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import challengeDetailStyles from '../styles/challengeDetailStyles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Drawer = createDrawerNavigator();

const challenges = {
  exercise: {
    beginner: {
      image: require('../assets/exercise.png'),
      title: 'Atividade Física - Iniciante',
      description: 'Complete atividades físicas diárias por 3 dias para manter sua saúde em dia.',
      points: '800xp',
      days: 3,
    },
    intermediate: {
      image: require('../assets/exercise.png'),
      title: 'Atividade Física - Intermediário',
      description: 'Complete atividades físicas diárias por 5 dias para manter sua saúde em dia.',
      points: '1200xp',
      days: 5,
    },
    advanced: {
      image: require('../assets/exercise.png'),
      title: 'Atividade Física - Avançado',
      description: 'Complete atividades físicas diárias por 7 dias para manter sua saúde em dia.',
      points: '1500xp',
      days: 7,
    },
  },
  volunteering: {
    image: require('../assets/voluntariado.png'),
    title: 'Voluntariado',
    description: 'Participe de atividades de voluntariado por 30 dias para ajudar a comunidade e ganhar pontos.',
    points: '1500xp',
    days: 30,
  },
  waste: {
    image: require('../assets/lixo.jpg'),
    title: 'Separação do Lixo',
    description: 'Separe seu lixo corretamente todos os dias por uma semana para ajudar na reciclagem.',
    points: '800xp',
    days: 7,
  },
  gardening: {
    image: require('../assets/horta.png'),
    title: 'Horta Doméstica',
    description: 'Cultive uma horta em casa e use plantas do seu próprio cultivo por 30 dias.',
    points: '1200xp',
    days: 30,
  },
};

const ChallengeDetailContent = ({ route, navigation }) => {
  const { type, level } = route.params;
  const challenge = (level ? challenges[type]?.[level] : challenges[type]) || {};

  const [accepted, setAccepted] = useState(false);
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (type && level) {
      const storedAccepted = localStorage.getItem(`${type}-${level}-accepted`);
      const storedUploads = JSON.parse(localStorage.getItem(`${type}-${level}-uploads`)) || [];
      if (storedAccepted) {
        setAccepted(true);
        setUploads(storedUploads);
      }
    }
  }, [type, level]);

  if (!type) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={challengeDetailStyles.title}>Tipo de desafio não especificado</Text>
      </View>
    );
  }

  if (!challenge.title) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={challengeDetailStyles.title}>Desafio não encontrado</Text>
      </View>
    );
  }

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem(`${type}-${level}-accepted`, true);
  };

  const handleDecline = () => {
    setAccepted(false);
    setUploads([]);
    localStorage.removeItem(`${type}-${level}-accepted`);
    localStorage.removeItem(`${type}-${level}-uploads`);
  };

  const handleUpload = (event) => {
    const newUploads = [...uploads, URL.createObjectURL(event.target.files[0])];
    setUploads(newUploads);
    localStorage.setItem(`${type}-${level}-uploads`, JSON.stringify(newUploads));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={challengeDetailStyles.container}>
        <Text style={challengeDetailStyles.title}>Detalhes do Desafio</Text>
        <View style={challengeDetailStyles.challengeDetails}>
          <Image source={challenge.image} style={challengeDetailStyles.challengeImage} />
          <View style={challengeDetailStyles.challengeInfo}>
            <Text style={challengeDetailStyles.challengeTitle}>{challenge.title}</Text>
            <Text style={challengeDetailStyles.challengeDescription}>{challenge.description}</Text>
            <Text style={challengeDetailStyles.challengePoints}><strong>Pontuação:</strong> {challenge.points}</Text>
            <View style={challengeDetailStyles.acceptButtons}>
              {!accepted ? (
                <Button title="Aceitar Desafio" onPress={handleAccept} />
              ) : (
                <Button title="Desistir do Desafio" onPress={handleDecline} />
              )}
            </View>
            {accepted && (
              <View>
                <Text style={challengeDetailStyles.uploadLabel}>Envie uma foto para comprovar o desafio:</Text>
                <TextInput type="file" onChange={handleUpload} accept="image/*" style={challengeDetailStyles.uploadInput} />
                <View style={challengeDetailStyles.uploadedImages}>
                  {uploads.map((upload, index) => (
                    <Image key={index} source={{ uri: upload }} style={challengeDetailStyles.uploadedImage} />
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default function ChallengeDetailScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="ChallengeDetailContent" component={ChallengeDetailContent} />
    </Drawer.Navigator>
  );
}






