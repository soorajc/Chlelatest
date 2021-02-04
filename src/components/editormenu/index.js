/**
 * Editor Menu Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

import Button from '../button';
import Styles from './styles';

const rotationAngles = [
  {label: '90 deg', value: 90},
  {label: '-90 deg', value: -90},
  {label: '180 deg', value: 180},
];

const EditorMenu = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.slideMenu}>
        <View style={Styles.labelContainer}>
          <Text style={Styles.label}>Opacity:</Text>
        </View>
        <View style={Styles.sliderContainer}>
          <Slider
            style={Styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={1}
            minimumTrackTintColor="#778af7"
            maximumTrackTintColor="#d5d5d7"
            tapToSeek
            onValueChange={(value) =>
              props.handleEditorConfig(value, 'opacity')
            }
            onSlidingComplete={(value) =>
              props.handleEditorConfig(value, 'opacity')
            }
          />
        </View>
      </View>
      <View style={Styles.slideMenu}>
        <View style={Styles.labelContainer}>
          <Text style={Styles.label}>Scale:</Text>
        </View>
        <View style={Styles.sliderContainer}>
          <Slider
            style={Styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={1}
            tapToSeek
            minimumTrackTintColor="#778af7"
            maximumTrackTintColor="#d5d5d7"
            onSlidingComplete={(value) =>
              props.handleEditorConfig(value, 'scale')
            }
            onValueChange={(value) => props.handleEditorConfig(value, 'scale')}
          />
        </View>
      </View>
      <View style={Styles.groupedButtonMenuContainer}>
        <View style={Styles.groupedLabelContainer}>
          <Text style={Styles.label}>Rotate:</Text>
        </View>
        <View style={Styles.groupedButtonContainer}>
          {rotationAngles.map((item, index) => (
            <Button
              key={index}
              style={Styles.roundButton}
              labelStyle={Styles.buttonLabel}
              label={item.label}
              backgroundColor="#778af7"
              handlePress={() => props.handleEditorConfig(item.value, '')}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default EditorMenu;

EditorMenu.propTypes = {
  handleEditorConfig: PropTypes.func.isRequired,
};
