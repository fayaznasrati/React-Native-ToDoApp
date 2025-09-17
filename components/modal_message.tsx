import React from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";


type props = {
  message: string;
  visibleState?: boolean;
  onClose?: () => void;
};

const ModalMessage = ({ message,visibleState, onClose }: props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibleState}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>{message}</Text>
      <Button title="close" onPress={()=>{
        onClose && onClose();
      }}/>
      </View>
    </Modal>
  );
};
export default ModalMessage;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
    maxHeight:200,
    marginHorizontal: 20,   
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
});
