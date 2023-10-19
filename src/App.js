import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView,Text, View,FlatList, ScrollView,Image, Dimensions } from 'react-native';
import news_data from './news_data.json';
import NewsCard from './Components/NewsCard';
import news_banner_data from './news_banner_data.json';


 function App() {

  const renderNews=({item})=><NewsCard news={item}/>;
  
  
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.header_text} >News</Text>
    <FlatList 
        ListHeaderComponent={()=>(
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {news_banner_data.map(bannerNews=>(
        <Image 
        style={styles.banner_image} 
        source={{uri:bannerNews.imageUrl}} 
        key={bannerNews.id} //render edilen ogelerin keylerinin unique olmasi lazim bu yüzden kullanılıyor
        />
        ))}
      </ScrollView>
    )}
        keyExtractor={item=>item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
          />
         
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container:{
    backgroundColor:"#eceff1",
    paddingBottom:40,
    paddingTop:50,
    flex:1,
   
  },

banner_image:{
  height:Dimensions.get('window').height/3,
  width:Dimensions.get('window').width/3,
},

header_text:{
  paddingLeft:13,
  paddingTop:7,
  fontWeight:'bold',
  fontSize:30,
}

});

export default App;


