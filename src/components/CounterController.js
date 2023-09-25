import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function CounterController({ setCounterValue, customValueParent }) {
  const onAdd = () => {
    setCounterValue((prev) => prev + customValueParent);
  };
  const onSubtract = () => {
    setCounterValue((prev) => prev - customValueParent);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSubtract}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 20,
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0096FF",
  },
});

export default CounterController;
