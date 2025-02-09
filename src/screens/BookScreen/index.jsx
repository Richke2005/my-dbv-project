import React, {useState, useEffect, useRef, useMemo} from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import {BookService} from "../../infra/services/index.js";
import ImageCard from "../../patterns/imageCard/dailyVerse";
import { ActivityIndicator, MD2Colors, Card, Chip, Button } from "react-native-paper";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";


export default function BookScreen({route, navigation}) {
    const {id} = route.params;
    const [book, setBook] = useState({});
    const [content, setContent] = useState([]);
    const [searhedContent, setSearchedContent] = useState([]);
    const tags = useRef([]);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

    useEffect(() => {
        fetchBookById(id);
    },
    []);


    function fetchBookById(id){
        new BookService()
        .getDataById(id)
        .then(response => {
            setBook(response);
            tags.current = noReplicateTags(response.content);
            setSearchedContent(response.content);
            setContent(response.content);
            
        })
        .catch(e => console.log(e));
    }

    const handleExpandAction = () => bottomSheetRef.current?.expand();
    const handleCloseAction = () => bottomSheetRef.current?.close();

    function noReplicateTags(objects){
        const temp = [];
        objects.forEach(obj => {
            if(!temp.some(item => item.category === obj.category)){
                temp.push({category: obj.category, _id: obj._id});
            }
        });
        return temp;
    }

    function updateTags(item, index) {
        item.isSet = !item.isSet;
        const update = item;
        tags.current[index] = update;
    }

    function searchBytag(tags = [], content = []){
        if(tags.length === 0){
            return content;
        }else{
            const temp = [];
            tags.forEach(tag => {
                const result = content.filter(item => item.category === tag.category);
                temp.push(...result);
            });
            return temp;
        }
    }

    if (Object.keys(book).length === 0)
		return <ActivityIndicator size={50} style={{ marginTop: 20 }} animating={true} color={MD2Colors.red800} />;

    function renderContent({item, index}){
        return <Card key={item._id} style={{ margin: 10 }}
            onLongPress={() => handleExpandAction()}>
            <Card.Title
                title={item.category}
                titleStyle={{ fontWeight: "bold" }}
            />

            <Card.Content style={{ marginBottom: 20 }}>
                <Text>{item.requirement}</Text>
            </Card.Content>

            <Card.Actions>
                <Button 
                mode="outlined" 
                icon={"check"}
                onPress={() => console.log('pressed')}
                >Complete</Button>
            </Card.Actions>
        </Card>
    }

    return <SafeAreaView>
            <FlatList
            data={searhedContent}
            renderItem={renderContent}
            keyExtractor={item => item._id}
            ListHeaderComponent={()=>(
                <>
                    <ImageCard 
                    title={book.title} 
                    img={book.image}/>

                   <FlatList
                   style={{padding: 5}}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   data={tags.current}
                    renderItem={({item, index}) => <Chip 
                    key={item._id} 
                    selected={item.isSet}
                    style={{marginLeft: 10}}
                    mode="outlined"
                    onPress={() => {
                        updateTags(item, index);
                        const trueTags = tags.current.filter(tag => tag.isSet);
                        const search = searchBytag(trueTags, content);
                        setSearchedContent(search);
                    }}
                    >{item.category}</Chip>}
                    keyExtractor={(_, index) => index.toString()}
                   />
                </>
            )}
            />

            <BottomSheet
                    ref={bottomSheetRef}
                    index={-1}
                    snapPoints={snapPoints}
                    backgroundStyle={{backgroundColor: "#FFF"}}
                    enablePanDownToClose={true}
                    >
                <BottomSheetScrollView style={{
                    flex: 1
                    }}>
                        <Card.Title
                            title="Respostas"
                            titleStyle={{fontSize: 20, fontWeight: "bold"}}
                        />
                        
                </BottomSheetScrollView>
            </BottomSheet>
    </SafeAreaView>

}