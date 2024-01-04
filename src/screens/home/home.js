import { View, ScrollView, StyleSheet } from "react-native"
import VerseOfDay from "../../components/verse_of_day"

const Home = ({navigation})=>{
    return<ScrollView>
      <View style={styles.container}>
        <VerseOfDay
        verse="Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam." 
        image={{uri: "https://deusteabencoe.com.br/wp-content/uploads/2021/10/o-vale-da-sombra-da-morte.jpg"}}/>
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