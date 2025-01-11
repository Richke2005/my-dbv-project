import React from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";

const ImageCard = ({children, title, subtitle, text, img, style, ...props}) => {
    return<Pressable style={[styles.cardContainer, style]} {...props}>
        <Image source={{uri: img}} style={{ 
            position: "absolute", 
            width: "100%", 
            height: "100%", 
            borderRadius: 20
            }}/>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.text}>{text}</Text>
            {children}
        </View>
    </Pressable>;
}

const styles = StyleSheet.create({
    cardContainer:{
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        flex: 1,
        alignItems: "center",
        minHeight: 200,
    },
    contentContainer: {
        padding: 20,
        width: "100%", 
        height: "100%", 
        justifyContent: "flex-start"
    },
    title: {
        padding: 5,
        fontSize: 35,
        color: "white",
        fontWeight: "bold",
    },
    subtitle: {
        padding: 5,
        fontSize: 20,
        color: "whitesmoke"
    },
    text: {
        padding: 5,
        fontSize: 15,
        color: "white"
    }
});

export default ImageCard;