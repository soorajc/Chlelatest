/**
 * PhotoFrame Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import PropTypes from 'prop-types';

import Styles from './styles';
import frameBackground from '../../assets/frame.png';
import placeholderImage from '../../assets/placeholder.png';

const PhotoFrame = (props) => {
  const {opacity, scale, rotate} = props.photoConfig;
  return (
    <ImageBackground
      ref={props.frameRef}
      resizeMode="stretch"
      style={Styles.frame}
      source={frameBackground}>
      <View style={Styles.photoContainer}>
        <Image
          style={[
            Styles.photo,
            {
              opacity,
              transform: [{scale}, {rotate}],
            },
          ]}
          source={props.source ? {uri: props.source} : placeholderImage}
        />
      </View>
    </ImageBackground>
  );
};

export default PhotoFrame;

PhotoFrame.propTypes = {
  source: PropTypes.string,
  photoConfig: PropTypes.object,
};
