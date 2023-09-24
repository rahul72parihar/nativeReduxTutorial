import { View } from "react-native";
import CounterCustomSet from "./src/components/CounterCustomSet";
import CounterScreen from "./src/screens/CounterScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CounterScreen />
      <CounterCustomSet />
    </View>
  );
}
