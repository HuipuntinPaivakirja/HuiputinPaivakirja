import { CvInvoke } from 'react-native-opencv4';

const detectAndDrawRed = async (imageUri) => {
  try {
    // Vaihe 1: Lataa kuva ja muunna HSV-väriavaruuteen
    const hsvImage = await CvInvoke({
      action: 'cvtColor',
      src: imageUri,
      code: 'COLOR_BGR2HSV',
    });

    // Vaihe 2: Luo maski punaiselle värille
    const redMask = await CvInvoke({
      action: 'inRange',
      src: hsvImage,
      lowerb: [0, 120, 70], // Ala-arvo (HSV)
      upperb: [10, 255, 255], // Ylä-arvo (HSV)
    });

    // Vaihe 3: Etsi ääriviivat punaisesta maskista
    const contours = await CvInvoke({
      action: 'findContours',
      src: redMask,
      mode: 'RETR_EXTERNAL',
      method: 'CHAIN_APPROX_SIMPLE',
    });

    // Vaihe 4: Piirrä ympyröitä ääriviivojen ympärille
    const outputImage = await CvInvoke({
      action: 'drawContours',
      src: imageUri,
      contours: contours,
      color: [0, 255, 0], // Ympyrän väri (vihreä)
      thickness: 2,
    });

    return outputImage; // Palautetaan kuva, jossa ympyrät on piirretty
  } catch (error) {
    console.error("Virhe värien tunnistuksessa:", error);
  }
};