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
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Roboto_700Bold',
    color: '#333',
  },
  cardPoints: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
    color: '#666',
  },
});


