import { View, Text,StyleSheet } from "react-native";

export default function ExploreScreen(){
  return(
    <View style = {styles.container}>
      <Text>hello this is explore screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  
  }
})
