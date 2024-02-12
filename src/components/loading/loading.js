import React from "react";
import { View } from "react-native";
import { AntDesign as LoadingIcon} from "@expo/vector-icons"
function Loading(){
    return(
        <View>
            <LoadingIcon
            name="loading1"
            size={30}
            color={"black"}/>
        </View>
    )
}

export default Loading;
