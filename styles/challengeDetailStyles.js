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
  challengeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  challengeImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 20,
  },
  challengeInfo: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Roboto_700Bold',
    color: '#333',
  },
  challengeDescription: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
    color: '#666',
  },
  challengePoints: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
    color: '#666',
  },
  acceptButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  uploadLabel: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
    color: '#333',
  },
  uploadInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  uploadedImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
