import React from "react"
import { View, StyleSheet } from "react-native"

const Window = ( {children}) =>{
    return<View style={style.window}>
        {children}
    </View>
}

const style = StyleSheet.create({
    window: {
        flex: 1,
        width: "85%",
        minWidth: "50%",
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
export default Window;
