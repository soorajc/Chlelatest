import {StyleSheet, Dimensions, Platform} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  frame: {
    width: height * 0.4,
    height: height * 0.4,
    padding: Platform.OS === 'ios' ? '10%' : '8%',
    backgroundColor: '#363640',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  photoContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  photo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
  },
});

export default styles;
