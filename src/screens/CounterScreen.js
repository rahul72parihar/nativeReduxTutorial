import { StyleSheet, View } from "react-native";

import CounterController from "../components/CounterController";
import CounterView from "../components/CounterView";
import { useState } from "react";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <CounterView counterValue={counter} />
      <CounterController setCounterValue={setCounter} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
