import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function Home({route, navigation}) {

    useEffect(() => {
    }, []);

    return(
        <View style={styles.container}>
            <Text multiline={false} style={styles.text}>{route.params.register_number}</Text>
            <Text multiline={false} style={styles.text}>{route.params.title}</Text>
            <Text multiline={false} style={styles.text}>{route.params.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:14,
        flexDirection: 'column',
        padding:10
      },
      text: {
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        color: "#000",
      },
});