import { View } from "react-native";
import CounterCustomSet from "./src/components/CounterCustomSet";
import CounterScreen from "./src/screens/CounterScreen";
import { useState } from "react";

export default function App() {
  const [customValueParent, setCustomValueParent] = useState(1);
  console.log(customValueParent);
  return (
    <View style={{ flex: 1 }}>
      <CounterScreen customValueParent={customValueParent} />
      <CounterCustomSet setCustomValueParent={setCustomValueParent} />
    </View>
  );
}
