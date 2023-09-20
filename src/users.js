import React from "react";
import { Text, View, Button } from "react-native";

const Users = ({route,navigation}) => {
    const {id,codeName} = route.params;

    return(
        <View>
            <Text>ID: {id} Component</Text>
            <Text>CodeName: {codeName}</Text>
            <Button
                color="#f0f"
                title="Go back"
                // onPress={()=>props.navigation.navigate('Home')}
                onPress={ () => navigation.navigate('Home', {
                    active:'yes'
                }) }
            />
        </View>
    )
}

export default Users;