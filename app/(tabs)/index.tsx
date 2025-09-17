import ToDoInput from "@/components/todoinput";
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

  const styles = createStyles(colorScheme ?? "light"); // pass mode to function


  const [toDoList, setToDoList] = useState<string[]>([]);

  const storeToDoHandler = (enteredToDo:any) => {
    console.log(enteredToDo);
    setToDoList((currentToDoList) => [enteredToDo, ...currentToDoList]);
  };


  const clearToDoHandler = (indexToRemove: number) => {
    setToDoList((currentToDoList) =>
      currentToDoList.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <View style={styles.mainContiner}>

      <ToDoInput onAddToDo={storeToDoHandler} />

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
