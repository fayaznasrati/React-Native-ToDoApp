import { StyleSheet, View, Text, Modal, Button } from "react-native";
import { useState } from "react";
import ModalMessage from "@/components/modal_message";

const CustomeComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalVisibilityHandler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>my Custom Components</Text>

      <Button
        title="Open Modal"
        onPress={() => {
          modalVisibilityHandler();
        }}
      />
      <ModalMessage
        message="This is a custom modal message!"
        visibleState={modalVisible}
        onClose={modalVisibilityHandler}
      />
    </View>
  );
};

export default CustomeComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
    borderBottomWidth: 1,
    borderColor: "#05a041",
    padding: 8,
    borderRadius: 6,
    color: "#05a041",
    marginBottom: 12,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
});
