import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ImageCard({children, title, subtitle, text, img, style, ...props}) {
    return<View style={[styles.cardContainer, style]} {...props}>
        <Image source={img} style={{ 
            position: "absolute", 
            width: "100%", 
            height: "100%", 
            borderRadius: 20
            }}/>
        <View style={{width: "100%", height: "100%", justifyContent: "flex-start"}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.text}>{text}</Text>
            {children}
        </View>
    </View>
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