import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';

import Styles from './styles';

const Loader = () => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible
      onRequestClose={() => console.log('back button trigger')}>
      <View style={Styles.loaderContainer}>
        <ActivityIndicator color="#FCD200" size="large" />
      </View>
    </Modal>
  );
};

export default Loader;
