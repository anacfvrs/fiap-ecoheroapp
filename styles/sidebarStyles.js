import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  drawer: {
    backgroundColor: '#060606',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  logo: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  icon: {
    marginRight: 20,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'RobotoMono_400Regular',
  },
});

