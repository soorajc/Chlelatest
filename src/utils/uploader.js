import storage from '@react-native-firebase/storage';
import {captureRef} from 'react-native-view-shot';

const uploadPhoto = (photoFrame, fileName) => {
  return captureRef(photoFrame, {
    format: 'png',
    quality: 0.8,
  })
    .then(async (uri) => {
      const reference = storage().ref(fileName + '.png');
      const result = await reference.putFile(uri);
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export default uploadPhoto;
