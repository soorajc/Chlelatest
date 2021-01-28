import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  slideMenu: {
    flexDirection: 'row',
    width: '60%',
  },
  sliderContainer: {
    width: '70%',
    justifyContent: 'center',
  },
  labelContainer: {
    width: '30%',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Quicksand-Regular',
    color: 'white',
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    marginRight: width * 0.02,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  groupedButtonMenuContainer: {
    flexDirection: 'row',
    width: '70%',
  },
  groupedLabelContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  groupedButtonContainer: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  roundButton: {
    height: height * 0.05,
    width: width * 0.12,
    borderRadius: 5,
    backgroundColor: '#0E74FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.01,
  },
  buttonLabel: {
    fontSize: height * 0.011,
  },
});

export default styles;
