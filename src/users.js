import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

const Users = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {id,codeName} = route.params;

    useEffect(()=>{
        setTimeout(()=>{
            navigation.setOptions({
                headerRight:()=><Button
                title="say something"
                onPress={ () => alert('something') }
                />
            })
        },2000)
    },[navigation]);

    return(
        <View>
            <Text>ID: {id} Component</Text>
            <Text>CodeName: {codeName}</Text>
            <Button
                color="#f0f"
                title="Go back"
                // onPress={()=>props.navigation.navigate('Home')}
                onPress={ () => navigation.navigate('Home', {
                    active:'yes and maybe'
                }) }
            />
            <Button 
                title="change header" 
                onPress={ ()=>navigation.setOptions({
                    title:'something else'
                }) }
            />
        </View>
    )
}

export default Users;