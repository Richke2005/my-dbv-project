import { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View } from "react-native"
import BibleServices from "../../services/bible_services"

const VerseOfDay = ({image})=>{
    const [data, setData] = useState([])
    const {book, text, chapter, number} = data;

    useEffect(()=>{
        fetchVerse();
    }, [])

    async function fetchVerse(){
        const booksFromAPI = await new BibleServices().getRandomVerse("acf");
        setData(booksFromAPI);
    }

    if(book == undefined && text == undefined){
        return <Text>Loading...</Text>
    }

    return<View 
    style={style.verseView} 
    onTouchStart={()=> console.log("ampliar")}>
        <Image 
        style={style.backgroundImage} 
        source={image}/>
        <View 
        style={style.contentView}>
            <View>
                <Text style={{color: "white"}}>versículo do dia:</Text>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>{`${book.name} ${chapter}:${number}`}</Text>
            </View>
            <View>
                <Text style={{color: "white"}}>{text}</Text>
            </View>
        </View>
    </View>
}

const style = StyleSheet.create({
    verseView:{
    position: "relative",
    margin: 10,
    width: "85%",
    height: 200,
    maxHeight: 300
    },

    backgroundImage:{
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "fill",
    borderRadius: 10
    },

    contentView:{
    height: "100%",
    padding: 15,
    display: "flex",
    justifyContent: "space-around"
    }
})



export default VerseOfDay;