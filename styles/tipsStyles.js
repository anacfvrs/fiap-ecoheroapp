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
  post: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  postTitle: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    marginBottom: 10,
    color: '#333',
  },
  postContent: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    color: '#666',
  },
  readMore: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    color: '#a63ed4',
    textDecorationLine: 'underline',
  },
});
