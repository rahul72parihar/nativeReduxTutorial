import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import { View, StyleSheet } from "react-native";

function CounterCustomSet(props) {
  console.log(props);
  const [customValue, setCustomValue] = useState(1);
  const handleChange = (text) => {
    setCustomValue(parseInt(text));
    props.setCustomValueParent(parseInt(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Custom</Text>
      <TextInput
        style={styles.counter}
        value={customValue.toString()}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 0.5, alignItems: "center" },
  text: { fontSize: 40, fontWeight: "bold", color: "#0096FF" },
  counter: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0096FF",
    width: 300,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
  },
});

export default CounterCustomSet;
