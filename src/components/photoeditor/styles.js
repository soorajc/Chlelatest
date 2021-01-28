import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

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
});

export default styles;
