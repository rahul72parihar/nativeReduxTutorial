import React from "react";
import { View, StyleSheet, Text } from "react-native";

function CounterView({ counterValue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.counter}>{counterValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  text: { fontSize: 40, fontWeight: "bold", color: "#0096FF" },
  counter: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#0096FF",
    width: 300,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
  },
});

export default CounterView;
