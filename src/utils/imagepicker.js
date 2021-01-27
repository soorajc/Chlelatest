import {launchImageLibrary} from 'react-native-image-picker';

const insertPhoto = async () => {
  return new Promise((resolve, reject) => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        reject('No image was Selected');
      } else if (response.error) {
        reject('Error while selecting image try again');
      } else {
        const fileName = response.fileName.replace(/\.[^/.]+$/, '');
        const source = {uri: response.uri, name: fileName};
        resolve(source);
      }
    });
  }).catch((error) => {
    return error;
  });
};

export default insertPhoto;
