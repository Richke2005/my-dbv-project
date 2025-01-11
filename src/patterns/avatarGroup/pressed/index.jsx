import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

const PressedAvatarGroup = ({children = Avatar, max }) => {
    let childrenArray = React.Children.toArray(children);
    const avatarsNumber = React.Children.count(children);

    childrenArray = childrenArray.map((child, i) => {
        if(childrenArray.length - 1 === i)
            return React.cloneElement(child, {style: {marginRight: (i * 15)}})

        return React.cloneElement(child, {style: {marginRight: -15}})
    })

    if (avatarsNumber > max) {
        const finalClone = childrenArray[avatarsNumber-1];
        const cloneSize = finalClone.props.size
        
        return<View style={styles.avatarGroup}>
            {childrenArray.slice(0, max)}
            <Avatar.Text size={cloneSize} style={{marginRight: 0}} label={`+${childrenArray.length - max}`}/>
        </View>
    }

    return<View style={styles.avatarGroup}>
        {childrenArray}
    </View>
}

const styles = StyleSheet.create({
    avatarGroup: {
        width: "100%",
        marginStart: 10,
        flexDirection: "row",
        alignItems: "center",
    }
})

export default PressedAvatarGroup;