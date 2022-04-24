import React from "react";
import { StyleSheet, View, } from "react-native";
import NewsArticle from "./components/NewsArticle";
import Counter from "./components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <NewsArticle imageuri = 'https://picsum.photos/id/237/200/300' title = 'Hello My News' subText = 'ようこそ！！'/>
      <NewsArticle imageuri = './images/app.png' title = 'Hello My News' subText = 'ようこそ！！'/>
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
