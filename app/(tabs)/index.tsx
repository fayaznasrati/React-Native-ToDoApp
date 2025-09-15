import TodoItem from "@/components/todoItem";
import { store } from "expo-router/build/global-state/router-store";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // 'light' or 'dark'

  const styles = createStyles(colorScheme ?? "light"); // pass mode to functio
  const [enteredToDo, setEnteredToDo] = useState("");

  const onEnteringToDoHunlder = (enteredText: string) => {
    setEnteredToDo(enteredText);
  };

  const [toDoList, setToDoList] = useState<string[]>([]);

  const storeToDoHandler = () => {
    setToDoList((currentToDoList) => [enteredToDo, ...currentToDoList]);
  };

  const clearToDoHandler = (indexToRemove: number) => {
    setToDoList((currentToDoList) =>
      currentToDoList.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <View style={styles.mainContiner}>
      <View style={styles.ToDoContainer}>
        <TextInput
          placeholder="add to do..."
          placeholderTextColor={colorScheme === "dark" ? "#ccc" : "#888"}
          style={styles.toDoInputText}
          onChangeText={onEnteringToDoHunlder}
          value={enteredToDo}
        />
        <TouchableOpacity
          style={styles.addToDoButton}
          onPress={() => {
            storeToDoHandler();
            setEnteredToDo("");
          }}
        >
          <Text style={styles.addToDoButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.toDoListContainer}>
        <ScrollView style={styles.toDoList}>
          {toDoList.map((item, index) => (
            <TodoItem
              key={index}
              text={item}
              onRemove={() => clearToDoHandler(index)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const createStyles = (mode: string) =>
  StyleSheet.create({
    mainContiner: {
      margin: 16,
      flex: 1,
      paddingTop: 32,
    },
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
    toDoListContainer: {
      flex: 1,
    },
    toDoList: {
      padding: 8,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: mode === "dark" ? "#555555" : "#ddd",
    },
 
  });
