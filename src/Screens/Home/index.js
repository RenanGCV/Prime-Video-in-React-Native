import { View, Text, StyleSheet, Image, TouchableOpacity, FlexAlignType, FlatList, ScrollView } from 'react-native';

import PrimeVideoLogo from 'E:/Projetos/Teste/teste-aula-1/src/primevideo/assets/prime_video.png';
import AmazonLogo from 'E:/Projetos/Teste/teste-aula-1/src/primevideo/assets/amazon_logo.png';
import MovieTheWhell from 'E:/Projetos/Teste/teste-aula-1/src/primevideo/assets/movies/the_wheel_of_time.png';
import { MOVIESWATCHING } from '../../primevideo/utils/moviesWatching';
import { MoviesCard } from '../../Components/MoviesCard';
import { MOVIESCRIME } from '../../primevideo/utils/moviesCrimes';
import { MOVIESWATCH } from '../../primevideo/utils/moviesWatch';



export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo}  />
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>

            

            <View style={styles.category}>
               <TouchableOpacity>
                <Text style={styles.categoryText}>Home</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                <Text style={styles.categoryText}>Series</Text>
               </TouchableOpacity>
               <TouchableOpacity>
                <Text style={styles.categoryText}>Filmes</Text>
               </TouchableOpacity>
               <TouchableOpacity >
                <Text style={styles.categoryText}>Kids</Text>
               </TouchableOpacity>
            </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
            <TouchableOpacity style={styles.theWhellImgThubnail}>
                <Image source={MovieTheWhell} style={styles.theWhellImg} />
            </TouchableOpacity>

            
            <Text style={styles.menuText}>Continue Assistindo</Text>

            <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList }
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.menuText}>Filmes de Crime</Text>
            
            <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList }
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.menuText}>Outros Idiomas</Text>
            
            <FlatList
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList }
                showsHorizontalScrollIndicator={false}
            />
            
        </ScrollView> 
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },

    category: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 15,
    },

    categoryText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },

    menuText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
    },

    theWhellImgThubnail: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    
    },


    contentList: {
        paddingLeft: 18,
        paddingRight: 18,
    },

    contentMovies: {

    }
})