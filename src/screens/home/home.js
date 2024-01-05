import { View, ScrollView, StyleSheet } from "react-native"
import VerseOfDay from "../../components/contentBox/verse_of_day"

const Home = ()=>{
    return<ScrollView>
      <View style={styles.container}>
        <VerseOfDay 
        image={{uri: "https://3.bp.blogspot.com/-kGy8M479mzw/WA_B5SixnpI/AAAAAAAAB8E/mM7iybk0CJoKHIO33wKR-B7nBZc5HB5SQCLcB/s1600/1%252B%2525281%252529.jpg"}}/>
      </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20, 
      alignItems: "center"
    },
  });

export default Home;