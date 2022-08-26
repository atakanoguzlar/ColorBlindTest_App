import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from "./screens/StartScreen";
import TestScreen from "./screens/TestScreen";
import ResultScreen from "./screens/ResultScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" options={{ headerShown: false }} component={StartScreen} />
        <Stack.Screen name="Test" options={{ headerShown: false }} component={TestScreen} />
        <Stack.Screen name="Result" options={{ headerShown: false }} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
