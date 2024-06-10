import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontFamily: 'Roboto_400Regular',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  avatarUpload: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  avatarUploadText: {
    color: '#a63ed4',
    textDecorationLine: 'underline',
  },
});

