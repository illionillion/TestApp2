import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, } from "react-native";
import NewsArticle from "../components/NewsArticle";
import Constants from "expo-constants";
import axios from "axios";

const APIKey = Constants.manifest.extra.newsApiKey
// const URI = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${APIKey}`
const URI = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${APIKey}`

export default function NewsScreen({navigation}) {
  const [news,setNews] = useState([])
  useEffect(()=>{
    getNews()
  },[])

  const getNews = async () => {
    const response = await axios.get(URI)
    setNews(response.data.articles);
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data = {news}
        renderItem = {({item}) => (
          <NewsArticle 
            imageuri = {item.urlToImage} 
            title = {item.title} 
            subText = {item.publishedAt}
            onPress = {() => navigation.navigate('詳細ページ', {article: item})}//画面遷移する
          />
        )}
        keyExtractor = {(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
