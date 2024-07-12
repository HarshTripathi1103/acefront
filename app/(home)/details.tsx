import {View, Text,StyleSheet, Button} from 'react-native';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';


export default function DetailsScreen
(){
    const router = useRouter();
    const params = useLocalSearchParams();
    return(
        <View style = {styles.container}>
            <Stack.Screen
               options={{
                title: params.name,
               }}
            />
            <Button onPress={() => {
                router.setParams({name: 'Updates'});
            }} title='update'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


