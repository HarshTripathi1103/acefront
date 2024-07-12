import { Button, View, Text } from "react-native";

import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";


export default function Settings() {
  const router = useRouter();
  const handleDismiss = () => {
    router.dismissAll()
  };

  return (
    <View 
    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button 
      title="Go to first screen" 
      onPress={handleDismiss} 
     />
    </View>
  );
}
