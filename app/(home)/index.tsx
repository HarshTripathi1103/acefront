import {View, Text,StyleSheet} from 'react-native';
import {Link} from 'expo-router';
export default function IndexHome(){
    return(
        <View style = {styles.container}>
            <Text>Home</Text>
            <Link
              href={{
                pathname: '/details/[id]',
                params: {id : '1'}
              }}>
                View user details
            </Link>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});