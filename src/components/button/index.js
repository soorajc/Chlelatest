/**
 * Button Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './styles';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.handlePress()}
      style={[
        Styles.button,
        {backgroundColor: props.backgroundColor},
        props.style && props.style,
      ]}>
      <Text style={[Styles.buttonLabel, props.labelStyle && props.labelStyle]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
