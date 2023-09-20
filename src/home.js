import React from "react";
import { Text, View, Button } from "react-native";

const Home = (props) => {

    console.log('props',props);

    return(
        <View>
            <Text>Home Component</Text>
            <Text>
                { 
                    props.route.params?
                    props.route.params.active
                    :null
                }
            </Text>
            <Button
                color="#f00"
                title="Go to users"
                onPress={ ()=>props.navigation.navigate('Users', {
                    id:23
                }) }
            />
        </View>
    )
}

export default Home;