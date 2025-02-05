import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions, View, Text, Image} from "react-native";
import { BookService } from "../../infra/services";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BookCard from "../../patterns/imageCard/bookCard.jsx";
import ImageCard from "../../patterns/imageCard/dailyVerse.jsx";
import { Portal, Dialog, Button } from "react-native-paper";


const { width, height } = Dimensions.get('window');

export default function LibraryScreen({route, navigation}){
    const isCarousel = useRef(null);
    const [visible, setVisible] = useState(false);
    const [books, setBooks] = useState([]);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0); 

    useEffect(() => {
        fetchBooks();
    }, []);

    function fetchBooks(){
        new BookService()
        .getAllData()
        .then((data) => {
            setBooks(data);
            setData([     
                {title: data[0].title, key: 1, image: data[0].image},
                {title: data[1].title, key: 2, image: data[1].image},
                {title: data[2].title, key: 3, image: data[2].image},
            ])
        })
        .catch((error) => console.error(error));
    }

    return <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <Carousel
            ref={isCarousel}
            layout="default"
            layoutCardOffset={18}
            sliderWidth={width}
            itemWidth={width * 1}
            data={data}
            onSnapToItem={(index) => {
                console.log(index)
                
                setIndex(index)
            }}
            renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => this._onPress(item)} key={item.key}>
                    <ImageCard img={item.image} title={item.title}/>
                </TouchableOpacity>
              )}/>

        <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 40,
          height: 6,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#fff',
          bottom: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
  
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
            <View style={styles.booksContainer}>
                {books.map((book, index) => (
                    <BookCard
                    id={book._id}
                    key={index}
                    title={book.title}
                    img={book.image}
                    // onLongPress={() => setVisible(true)}
                />
                ))}
            </View>
        </ScrollView>

        {/* <Portal>
			<Dialog style={{height: 500}} visible={visible} onDismiss={() => setVisible(false)}>
			<Dialog.Content>
				<ImageCard img={image1} title="Title"/>
                <Text>Content</Text>
			</Dialog.Content>
			<Dialog.Actions style={{position: "absolute", bottom: 0, width: "100%"}}>
				<Button onPress={() => setVisible(false)}>Cancel</Button>
				<Button onPress={() => console.log("press")}>Ok</Button>
			</Dialog.Actions>
			</Dialog>
        </Portal> */}
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    booksContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 10
    }
});