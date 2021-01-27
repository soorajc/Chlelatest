import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    marginTop: height * 0.05,
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
    color: '#8B97ED',
    fontSize: height * 0.034,
    textDecorationLine: 'underline',
  },
  button: {
    width: width * 0.4,
    height: height * 0.05,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.02,
  },
  buttonLabel: {
    fontFamily: 'Quicksand-Bold',
    color: 'white',
    fontSize: height * 0.02,
  },
});

export default styles;
