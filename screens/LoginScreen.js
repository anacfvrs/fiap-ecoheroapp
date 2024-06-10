import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Switch } from 'react-native';
import loginStyles from '../styles/loginStyles';

export default function LoginScreen({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={loginStyles.logo} />
      </View>
      <Text style={loginStyles.title}>Olá, Herói!</Text>
      <TextInput style={loginStyles.input} placeholder="Username ou e-mail corporativo" />
      <TextInput style={loginStyles.input} placeholder="Senha" secureTextEntry />
      <View style={loginStyles.rememberMeContainer}>
        <View style={loginStyles.toggleContainer}>
          <Switch
            value={rememberMe}
            onValueChange={(value) => setRememberMe(value)}
            thumbColor={rememberMe ? '#6fca3a' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#6fca3a' }}
          />
          <Text style={loginStyles.rememberMeText}>Lembre-se de mim</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={loginStyles.forgotPasswordText}>Esqueci Senha</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={loginStyles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={loginStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}



