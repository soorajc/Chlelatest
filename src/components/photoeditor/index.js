/**
 * PhotoEditor Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';

import PhotoFrame from '../photoframe';
import Loader from '../loader';
import Button from '../button';
import EditorMenu from '../editormenu';
import Styles from './styles';
import photoUpload from '../../utils/uploader';
import insertPhoto from '../../utils/imagepicker';

const PhotoEditor = () => {
  let photoFrameContainer = null;
  const [photoSource, setPhotoSource] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editorConfig, setEditorConfig] = useState({
    opacity: 1,
    rotate: 0,
    scale: 1,
  });

  const handlePhotoInsertion = async () => {
    const photoDetails = await insertPhoto();
    if (photoDetails && photoDetails.uri) {
      setPhotoSource(photoDetails);
    } else {
      Alert.alert('Message', photoDetails);
    }
  };

  const handlePhotoUpload = async () => {
    if (photoSource && photoSource.name) {
      setLoading(true);
      const fileName = photoSource.name;
      const uploadStatus = await photoUpload(photoFrameContainer, fileName);
      setLoading(false);
      if (
        uploadStatus &&
        uploadStatus.state &&
        uploadStatus.state !== 'success'
      ) {
        Alert.alert(
          'Message',
          'Some Error Occured while uploading image. Try Again',
        );
      } else {
        Alert.alert('Success', 'Your photo has been submitted successfully');
      }
    } else {
      Alert.alert('Message', 'Please select a photo for uploading');
    }
  };

  const handleEditorConfig = (value, type) => {
    if (type === 'opacity') {
      setEditorConfig({
        ...editorConfig,
        opacity: value,
      });
    } else if (type === 'scale') {
      setEditorConfig({
        ...editorConfig,
        scale: value,
      });
    } else {
      const currentAngle = editorConfig.rotate;
      const updatedAngle = currentAngle + value;
      setEditorConfig({
        ...editorConfig,
        rotate: updatedAngle,
      });
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Frame your memories</Text>
      <PhotoFrame
        frameRef={(input) => {
          photoFrameContainer = input;
        }}
        source={photoSource && photoSource.uri}
        photoConfig={editorConfig && editorConfig}
      />
      <Button
        label="Select Photo"
        backgroundColor="#ee5361"
        handlePress={handlePhotoInsertion}
      />
      <EditorMenu handleEditorConfig={handleEditorConfig} />
      <Button
        label="Submit"
        backgroundColor="#16EDBF"
        handlePress={handlePhotoUpload}
      />
      {loading && <Loader />}
    </View>
  );
};

export default PhotoEditor;
