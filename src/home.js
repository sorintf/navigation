import React from "react";
import { Text, View, Button } from "react-native";

const Home = (props) => {

    console.log('props',props);

    return(
        <View>
            <Text>Home Component</Text>
            <Button
                color="#f00"
                title="Go to users"
                onPress={()=>props.navigation.navigate('Users')}
            />
        </View>
    )
}

export default Home;