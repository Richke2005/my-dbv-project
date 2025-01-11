import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Avatar } from "react-native-paper";

const SpacedAvatarGroup = ({children = Avatar, max, spacement = 10}) => {
    let childrenArray = React.Children.toArray(children);
    const avatarsNumber = React.Children.count(children);

    childrenArray = childrenArray.map((child, i) => {
        return React.cloneElement(child, {style: {marginRight: spacement}})
    })

    if (avatarsNumber > max) {
        const finalClone = childrenArray[avatarsNumber-1];
        const cloneSize = finalClone.props.size
        
        return <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
            <View style={styles.avatarGroup}>
                {childrenArray.slice(0, max)}
                <Avatar.Icon size={cloneSize} icon="dots-horizontal"/>
            </View>
        </ScrollView>
    }

    return <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
        <View style={styles.avatarGroup}>
            {childrenArray}
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    avatarGroup: {
        width: "100%",
        marginStart: 10,
        flexDirection: "row",
        alignItems: "center",
    }
})

export default SpacedAvatarGroup;