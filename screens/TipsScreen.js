import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import tipsStyles from '../styles/tipsStyles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Drawer = createDrawerNavigator();

const TipsContent = ({ navigation }) => {
  const posts = [
    {
      id: 1,
      title: 'Como separar corretamente o lixo reciclável',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
      id: 2,
      title: 'Dicas para manter uma alimentação saudável',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
      id: 3,
      title: 'Como iniciar um projeto de voluntariado',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={tipsStyles.container}>
        <Text style={tipsStyles.title}>Dicas</Text>
        {posts.map((post) => (
          <View key={post.id} style={tipsStyles.post}>
            <Text style={tipsStyles.postTitle}>{post.title}</Text>
            <Text style={tipsStyles.postContent}>{post.content}</Text>
            <TouchableOpacity>
              <Text style={tipsStyles.readMore}>Leia mais</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default function TipsScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="TipsContent" component={TipsContent} />
    </Drawer.Navigator>
  );
}

