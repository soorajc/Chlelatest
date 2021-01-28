import 'react-native';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';

import PhotoFrame from '../src/components/photoframe';

configure({adapter: new Adapter()});

let photoFrameContainer = null;
const placeholderImageUri = '../../../src/assets/placeholder.png';
const sampleImageUri = './path/to/image.png';

it('Photo frame displays the default image if no image source is provided', () => {
  const photoConfig = {
    opacity: null,
    rotate: null,
    scale: null,
  };
  const wrapper = shallow(
    <PhotoFrame
      frameRef={(input) => {
        photoFrameContainer = input;
      }}
      source={null}
      photoConfig={photoConfig}
    />,
  );
  const wrapperImageUri = wrapper.props().children.props.children.props.source
    .testUri;
  expect(wrapperImageUri).toEqual(placeholderImageUri);
});

it('Photo frame displays the image from the given source successfully', () => {
  const photoConfig = {
    opacity: null,
    rotate: null,
    scale: null,
  };
  const wrapper = shallow(
    <PhotoFrame
      frameRef={(input) => {
        photoFrameContainer = input;
      }}
      source={sampleImageUri}
      photoConfig={photoConfig}
    />,
  );
  const wrapperImageUri = wrapper.props().children.props.children.props.source
    .uri;
  expect(wrapperImageUri).toEqual(sampleImageUri);
});

it('Photo frame succesfully modifies the selected image according to the configuration provided. ', () => {
  const photoConfig = {
    opacity: 0.3,
    rotate: '-90deg',
    scale: 0.3,
  };
  const wrapper = shallow(
    <PhotoFrame
      frameRef={(input) => {
        photoFrameContainer = input;
      }}
      source={sampleImageUri}
      photoConfig={photoConfig}
    />,
  );
  const wrapperImageStyles = wrapper.props().children.props.children.props
    .style[1];
  const wrapperImageOpacity = wrapperImageStyles.opacity;
  const wrapperImageScale = wrapperImageStyles.transform[0].scale;
  const wrapperImageRotationAngle = wrapperImageStyles.transform[1].rotate;

  expect(wrapperImageOpacity).toEqual(photoConfig.opacity);
  expect(wrapperImageScale).toEqual(photoConfig.scale);
  expect(wrapperImageRotationAngle).toEqual(photoConfig.rotate);
});
