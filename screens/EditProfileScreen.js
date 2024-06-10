import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import editProfileStyles from '../styles/editProfileStyles';

export default function EditProfileScreen() {
  const [form, setForm] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const fetchAddress = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${form.cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        alert('CEP não encontrado');
      } else {
        setForm({
          ...form,
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        });
      }
    } catch (error) {
      alert('Erro ao buscar endereço');
    }
  };

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={editProfileStyles.container}>
      <Text style={editProfileStyles.title}>Editar Perfil</Text>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>Modificar Avatar</Text>
        <TouchableOpacity style={editProfileStyles.avatarUpload}>
          <Image source={require('../assets/avatar.png')} style={editProfileStyles.avatar} />
          <Text style={editProfileStyles.avatarUploadText}>Escolher Arquivo</Text>
        </TouchableOpacity>
      </View>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>CEP</Text>
        <TextInput
          style={editProfileStyles.input}
          placeholder="Digite seu CEP"
          value={form.cep}
          onChangeText={(value) => handleChange('cep', value)}
          onBlur={fetchAddress}
        />
      </View>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>Rua</Text>
        <TextInput
          style={editProfileStyles.input}
          placeholder="Digite sua rua"
          value={form.street}
          onChangeText={(value) => handleChange('street', value)}
        />
      </View>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>Número</Text>
        <TextInput
          style={editProfileStyles.input}
          placeholder="Digite o número"
          value={form.number}
          onChangeText={(value) => handleChange('number', value)}
        />
      </View>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>Complemento</Text>
        <TextInput
          style={editProfileStyles.input}
          placeholder="Digite o complemento"
          value={form.complement}
          onChangeText={(value) => handleChange('complement', value)}
        />
      </View>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>Bairro</Text>
        <TextInput
          style={editProfileStyles.input}
          placeholder="Digite seu bairro"
          value={form.neighborhood}
          onChangeText={(value) => handleChange('neighborhood', value)}
        />
      </View>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>Cidade</Text>
        <TextInput
          style={editProfileStyles.input}
          placeholder="Digite sua cidade"
          value={form.city}
          onChangeText={(value) => handleChange('city', value)}
        />
      </View>
      <View style={editProfileStyles.formGroup}>
        <Text style={editProfileStyles.label}>Estado</Text>
        <TextInput
          style={editProfileStyles.input}
          placeholder="Digite seu estado"
          value={form.state}
          onChangeText={(value) => handleChange('state', value)}
        />
      </View>
      <Button title="Salvar Alterações" onPress={() => {}} />
    </View>
  );
}

