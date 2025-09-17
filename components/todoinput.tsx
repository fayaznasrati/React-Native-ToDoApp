
import { useState } from "react";
import { StyleSheet,View,TextInput,TouchableOpacity,Text, useColorScheme} from "react-native";


type props = {
  onAddToDo: (todo:String)=>void
}
const ToDoInput = ({onAddToDo}:props) => {

 const colorScheme = useColorScheme(); // 'light' or 'dark'
 const styles = createStyles(colorScheme ?? "light"); // pass mode to functio 
 const [enteredToDo, setEnteredToDo] = useState("");

  const storeToDoHandler = () => {
    if (!enteredToDo.trim()) return; // ignore empty
    onAddToDo(enteredToDo); // send up to HomeScreen
    setEnteredToDo(""); // clear input
  };





  return ( 
         <View style={styles.ToDoContainer}>
        <TextInput
          placeholder="add to do..."
          placeholderTextColor={colorScheme === "dark" ? "#ccc" : "#888"}
          style={styles.toDoInputText}
          onChangeText={setEnteredToDo}
          value={enteredToDo}
        />
        <TouchableOpacity
          style={styles.addToDoButton}
          onPress={() => {
            storeToDoHandler();
          }}
        >
          <Text style={styles.addToDoButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>  )
}

export default ToDoInput


const createStyles = (mode:any) => StyleSheet.create({
       ToDoContainer: {
      paddingTop: 16,
      marginBottom: 16,
      flexDirection: "row",
      alignItems: "center",
    },
        toDoInputText: {
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      borderWidth: 1,
      borderColor: "#aca8a8",
      backgroundColor: mode === "dark" ? "#444444" : "#fff",
      padding: 10,
      marginBottom: 8,
      borderRadius: 10,
      marginRight: 8,
      width: "80%",
      height: 50,
      color: mode === "dark" ? "#fff" : "#000",
    },
    addToDoButton: {
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: mode === "dark" ? "#444444" : "#2b2b2b",
      borderRadius: 10,
      height: 50,
      justifyContent: "center",
      width: "20%",
      marginBottom: 8,
    },
    addToDoButtonText: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "500",
    },
  
  
  
  });