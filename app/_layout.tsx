import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
export default function Tablayout(){
    return(
      <>
        <GestureHandlerRootView>
            <Drawer/>
            
        {/* <Tabs>
            <Tabs.Screen 
            name="(tabs)"
            options={{
                title: "Explore",
                tabBarIcon: ({color}) => <MaterialIcons size={28} name="explore" color={color}/>
            }}
             
            />
            <Tabs.Screen 
            name="(home)"
            options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
            }}
            />


            <Tabs.Screen 
            name="settings"
            options={{
                title: "settings",
                tabBarIcon: ({color}) => <MaterialIcons size={28} name="settings" color={color}/>
            }}
            />

            <Tabs.Screen 
            name="+not-found"
            options={{
                title: "not-found",
                href : null,
                tabBarIcon: ({color}) => <MaterialIcons size={28} name="error" color={color}/>
            }}
            />





            
        </Tabs> */}
        </GestureHandlerRootView>
        </>
    );
}