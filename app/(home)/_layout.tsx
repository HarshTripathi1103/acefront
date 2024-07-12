import { Stack } from "expo-router";
import {Tabs} from "expo-router";

export default function Rootlayout(){
  return(
    <>
    <Stack
      screenOptions={{
        headerStyle:{
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{}}/>
      <Stack.Screen name = "details"/>
    </Stack>

    {/* <Tabs>
    <Tabs.Screen name="index" />
    <Tabs.Screen name="details" />

    </Tabs> */}
    </>
  )
}