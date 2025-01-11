import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";

const Avatar = ({ children = Avatar}) => {
    return <View>
        {children}
    </View>
}