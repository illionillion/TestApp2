import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const NewsArticle = ({imageuri, title, subText}) => {

    const [news, setNews] = useState([])

    // useEffect(()=>{alert('useEffect is moved')},[])

    return(
        <View style={styles.box}>
            <View style = {styles.textBox}>
                <Text style = {styles.Text}>
                    {title}
                </Text>
                <Text style = {styles.subText}>
                    {subText}
                </Text>
            </View>
            <View style = {styles.imageBox}>
                <Image
                    style = {{width: 100, height: 100}}
                    source = {{
                        uri: imageuri
                    }}
                />
            </View>
        </View>
    )
}

export default NewsArticle

const styles = StyleSheet.create({
    box: {
      height: 100,
      width: '100%',
      backgroundColor: 'lightblue',
      borderWidth: 1,
      flexDirection: 'row'
    },
    textBox: {
      flex: 1,
      backgroundColor: 'steelblue',
      padding: 16,
      justifyContent: 'space-between'
    },
    imageBox: {
      width: 100,
      backgroundColor: 'powderblue'
    },
    Text: {
      fontSize: 12,
    },
    subText: {
      fontSize: 12,
      color: 'red',
    }
  });
  