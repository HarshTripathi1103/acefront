import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack 
       screenOptions={{
        headerStyle:{
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
      }}
     
    
    >  
       <Stack.Screen name="index"/>
       <Stack.Screen name="explore"/>
       

    </Stack>
  )
}