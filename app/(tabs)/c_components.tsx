import { StyleSheet, View, Text } from "react-native";

const CustomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>my Custom Components</Text>

        <View>
          <Text>This is a custom component</Text>
        </View>
      
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
});
