import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, } from "react-native";
import NewsArticle from "./components/NewsArticle";
import Counter from "./components/Counter";
import Constants from "expo-constants";
import axios from "axios";

const APIKey = Constants.manifest.extra.newsApiKey
const URI = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${APIKey}`

export default function App() {
  const [news,setNews] = useState([])
  useEffect(()=>{
    getNews()
  },[])

  const getNews = async () => {
    const response = await axios.get(URI)
    setNews(response.data.articles);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data = {news}
        renderItem = {({item}) => (
          <NewsArticle 
            imageuri = {item.urlToImage} 
            title = {item.title} 
            subText = {item.publishedAt}
          />
        )}
        keyExtractor = {(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
