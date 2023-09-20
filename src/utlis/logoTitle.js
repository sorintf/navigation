import React from "react";
import { Text, View, Image } from "react-native";

import Logo from '../assets/baguette.png';
// import Logo from '../assets/logo-sustine-binele.svg'; // nu merge svg
// TODO: de vazut cum se pot include SVG

const LogoTitle = () => {
    return(
        <Image 
            source={Logo} 
            style={{ width:50,height:50}}
        />
    )
}

export default LogoTitle;