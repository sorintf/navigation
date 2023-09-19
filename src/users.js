import React from "react";
import { Text, View, Button } from "react-native";

const Users = (props) => {
    return(
        <View>
            <Text>Users Component</Text>
            <Button
                color="#f0f"
                title="Go back"
                // onPress={()=>props.navigation.navigate('Home')}
                onPress={ () => props.navigation.goBack() }
            />
        </View>
    )
}

export default Users;