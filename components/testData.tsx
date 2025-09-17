import { StyleSheet, Text, View } from "react-native";

const TestData = (props: any) => {
  return (
    <View style={styles.theAppTitle}>

       <Text>{props.theData.title}</Text>
       <Text>{props.theData.description}</Text>
        
        </View>
  );
};

export default TestData;

const styles = StyleSheet.create({
  theAppTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
