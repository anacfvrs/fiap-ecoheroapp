import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#060606',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontFamily: 'RobotoMono_400Regular',
    color: '#6fca3a', 
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    fontFamily: 'Roboto_400Regular',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 10,
    fontFamily: 'Roboto_400Regular',
  },
  forgotPasswordText: {
    color: '#a63ed4',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto_400Regular',
  },
  loginButton: {
    backgroundColor: '#59A52C', // Cor do tema do app
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },
});



