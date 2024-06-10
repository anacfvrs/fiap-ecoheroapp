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
  rankingList: {
    flex: 1,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontFamily: 'Roboto_700Bold',
  },
  points: {
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    color: '#6fca3a',
  },
});
