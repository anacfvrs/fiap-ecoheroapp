import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import headerStyles from '../styles/headerStyles';

export default function Header({ navigation }) {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={headerStyles.logo} />
      </View>
      <View style={headerStyles.userInfo}>
        <View style={headerStyles.userDetails}>
          <Text style={headerStyles.username}>Nome Sobrenome</Text>
          <Text style={headerStyles.points}>10500xp</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image source={require('../assets/avatar.png')} style={headerStyles.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
