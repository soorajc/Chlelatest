import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363640',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    marginTop: height * 0.05,
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
    color: 'white',
    fontSize: height * 0.038,
    textDecorationLine: 'underline',
  },
});

export default styles;
