/**
 * Button Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  handlePress: PropTypes.func.isRequired,
};
