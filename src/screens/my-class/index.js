import React from "react";
import {View, Text, Image} from "react-native"
import image from "../../../assets/images/pathfinders_lenço.png"

const MyClass = ()=>{
    return<View>
        <Image source={image} style={{ height: 200, width: "100%"}}/>
    </View>
}

export default MyClass;