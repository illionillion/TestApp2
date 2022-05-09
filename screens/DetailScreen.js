import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import  Constants from "expo-constants";

const DetailScreen = (props) => {
    const {route} = props
    const {article} = route.params 
    console.log(article);
    return (
        <WebView style = {style.container} source={{uri: article.url}}/>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
})

export default DetailScreen