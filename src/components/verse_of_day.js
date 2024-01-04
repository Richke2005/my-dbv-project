import { Text, View } from "react-native"
import Styled from "styled-components/native"

const VerseView = Styled.View`
position: relative;
margin: 10px;
width: 85%;
height: 200px;
maxHeight: 300px;
`

const BackgroundImage = Styled.Image`
width: 100%;
height: 100%;
position: absolute;
objectFit: fill;
borderRadius: 10px;
`

const ContentView = Styled.View`
height: 100%;
padding: 15px;
display: flex;
justifyContent: space-around;
`

const VerseOfDay = ({verse, image})=>{
    return<VerseView 
    onTouchStart={()=> console.log("ampliar")}>
        <BackgroundImage source={image}/>
        <ContentView>
            <View>
                <Text style={{color: "white"}}>versículo do dia:</Text>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>Salmos 23:4</Text>
            </View>
            <View>
                <Text style={{color: "white"}}>{verse}</Text>
            </View>
        </ContentView>
    </VerseView>
}

export default VerseOfDay;