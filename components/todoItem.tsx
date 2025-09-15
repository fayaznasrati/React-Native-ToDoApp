import { StyleSheet, View, Text, TouchableOpacity, useColorScheme} from "react-native";

type TodoItemProps = {
  text: string;               // the to-do text
  onRemove: () => void;       // function to remove the item
};

const TodoItem = ({ text, onRemove }: TodoItemProps) => {
      const colorScheme = useColorScheme(); // 'light' or 'dark'
      const styles = createStyles(colorScheme ?? "light"); // pass mode to functio
  return (
    <View style={styles.toDoItem}>
      <Text style={styles.toDoItemText}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.removeButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const createStyles = (mode: string) =>
  StyleSheet.create({
     toDoItem: {
      padding: 12,
      backgroundColor: mode === "dark" ? "#444444" : "#fff",
      borderRadius: 6,
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
      marginBottom: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
    },
    toDoItemText: {
      color: mode === "dark" ? "#fff" : "#000",
      fontSize: 16,
    },
    removeButton: {
      color: mode === "dark" ? "#fff" : "#000",
      fontSize: 16,
      padding: 1,
      borderColor: mode === "dark" ? "#fff" : "#000",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      textAlign: "center",
      paddingLeft: 7,
      paddingRight: 7,
    },
});
