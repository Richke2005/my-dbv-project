import React from "react";
import { View, Pressable, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const cardSize = width * 0.28;
const FONT_SIZE = 2;

const BookCard = ({children, title, img, style, onLongPress, ...props}) => {
    const titleSize = title.length;
    const navigator = useNavigation();
    

    if(titleSize > 20){
        title = title.substring(0, 20) + "...";
    }
    
    return <Pressable 
        id={props.id} 
        style={[styles.book, style]}
        onLongPress={onLongPress} 
        onPress={()=> navigator.navigate("BookScreen", {id: props.id})}>
        <Image source={{uri: img}} style={styles.image}/>

        <View style={{padding: 10}}>
            <Text style={{fontWeight: "bold"}}>{title}</Text>
        </View>
        {children}
    </Pressable>;
}

const styles = StyleSheet.create({
    book: {
        margin: 5,
        width: cardSize,
        height: 180,
        backgroundColor: "#fff",
        borderRadius: 5,
    },

    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: "100%",
        height: "60%"
    }
});

export default BookCard;