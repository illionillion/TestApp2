import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
    const [count, setCount ] = useState(0)

    useEffect(
        () => {
            console.log(count);
        },
        [count]
    )

    return (
        <View>
            <Text>{count}</Text>
            <Button onPress={() => {setCount((prev) => prev+1)}} title = {"カウント"}/>
        </View>
    )
}

export default Counter