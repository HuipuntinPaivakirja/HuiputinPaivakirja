import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    camera: {
      flex: 1,
      width: '100%',
      aspectRatio: 11 / 16,
    },
    
    buttonsContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      width: '100%',
    },
    cameraButtonContainer: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
    },
    flashButtonContainer: {
      position: 'absolute',
      left: 100,
      top: 40,
    },
    rotateButtonContainer: {
      position: 'absolute',
      right: 120,
      top: 40,
    },
    retakeButtonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 40,
    },
    clearButtonContainer: {
      position: 'absolute',
      bottom: 20,
      right: 145,
    },
    DrawLineContainer: {
      height: '100%' ,
      width: '100%',
    },
    saveButtonContainer: {
      position: 'absolute',
      bottom: 20,
      right: 40,
    },
    SnappiContainer: {
      backgroundColor: "blue",
      height: '100%',
      width: '100%',
    },
  });
  
export default styles;