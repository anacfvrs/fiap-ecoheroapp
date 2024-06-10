import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#060606',
    padding: 10,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    textAlign: 'right',
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
  },
  points: {
    color: '#6fca3a',
    fontSize: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
