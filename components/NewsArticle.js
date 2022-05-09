import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const NewsArticle = ({imageuri, title, subText, onPress}) => {

  const date = new Date(subText)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDay()
  const releaseDay = `${year} - ${month} - ${day}`

    return(
        <TouchableOpacity style={styles.box} onPress = {onPress}>
            <View style = {styles.textBox}>
                <Text numberOfLines={3} style = {styles.Text}>
                    {title}
                </Text>
                <Text style = {styles.subText}>
                    {releaseDay}
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
        </TouchableOpacity>
    )
}

export default NewsArticle

const styles = StyleSheet.create({
    box: {
      height: 100,
      width: '100%',
      backgroundColor: '#fff',
      borderColor: 'lightblue',
      borderWidth: 1,
      flexDirection: 'row'
    },
    textBox: {
      flex: 1,
      padding: 16,
      justifyContent: 'space-between'
    },
    imageBox: {
      width: 100,
    },
    Text: {
      fontSize: 12,
    },
    subText: {
      fontSize: 12,
      color: 'darkblue',
    }
  });
  