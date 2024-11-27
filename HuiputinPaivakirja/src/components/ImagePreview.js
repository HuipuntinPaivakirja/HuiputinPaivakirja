import React, { useRef, useState } from 'react';
import { View, ImageBackground } from 'react-native';
import Button from './Button';
import styles from '../styles/CameraAndImageStyles';
import { captureRef } from 'react-native-view-shot';
import DrawLine from './DrawLine';

export default function ImagePreview({ image, setImage, savePicture}) { // -N
  const captureRefView = useRef(null);
  const [hideButtons, setHideButtons] = useState(true);

  const handleSavePic = async () => {
    setHideButtons(false);
    try {
      const picAndLines = await captureRef(captureRefView, {
        format: 'png',
        quality: 0.8,
      });
      savePicture(picAndLines); // Tässä on nyt kuva ja piirretty viiva
    } catch (error) {
      console.error('failed to capture image', error);
    }
  };

  return (
    // Display the image in the background with the retake and save buttons on top
    <View ref={captureRefView} style={styles.SnappiContainer}>
    <ImageBackground source={{ uri: image }} style={styles.SnappiContainer}>
      <DrawLine
      hideButtons={hideButtons}
      />
      </ImageBackground>

      {hideButtons && ( //piilottaa buttonit kun otetaan kuva missä näkyy reitti
        <View style={styles.buttonsContainer}>
          
          <View style={styles.retakeButtonContainer}>
            <Button title="Re-take" icon="retweet" onPress={() => setImage(null)} />
          </View>
          <View style={styles.saveButtonContainer}>
            <Button title="Save" icon="check" onPress={handleSavePic} />
          </View>
        </View>
         )}
        </View>
      
  );
}
