import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import sidebarStyles from '../styles/sidebarStyles';

export default function Sidebar(props) {
  return (
    <DrawerContentScrollView {...props} style={sidebarStyles.drawer}>
      <View style={sidebarStyles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={sidebarStyles.logo} />
      </View>
      <View style={sidebarStyles.container}>
        <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => props.navigation.navigate('Home')}>
          <FontAwesome5 name="tasks" size={24} color="#fff" style={sidebarStyles.icon} />
          <Text style={sidebarStyles.menuItemText}>Desafios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => props.navigation.navigate('Ranking')}>
          <FontAwesome5 name="medal" size={24} color="#fff" style={sidebarStyles.icon} />
          <Text style={sidebarStyles.menuItemText}>Ranking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => props.navigation.navigate('Tips')}>
          <FontAwesome5 name="lightbulb" size={24} color="#fff" style={sidebarStyles.icon} />
          <Text style={sidebarStyles.menuItemText}>Dicas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => props.navigation.navigate('Rewards')}>
          <FontAwesome5 name="gift" size={24} color="#fff" style={sidebarStyles.icon} />
          <Text style={sidebarStyles.menuItemText}>Recompensas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => props.navigation.navigate('Info')}>
          <FontAwesome5 name="info-circle" size={24} color="#fff" style={sidebarStyles.icon} />
          <Text style={sidebarStyles.menuItemText}>Mais Informações</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}


