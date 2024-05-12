import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function Home({route, navigation}) {

    const [data, setData] = useState('');

    getDetails = () => {
        fetch(`http://192.168.29.171:8989/get-all-data/${route.params.register_number}`)
      .then(response => response.json())
      .then(setData);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['degree']}</Text>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['semester']}</Text>
            </View>
            <Text multiline={false} style={styles.text}>{data['department']}</Text>
            <View style={styles.row}>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['dob']}</Text>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['doj']}</Text>
            </View>
            <Text multiline={false} style={styles.text}>{data['address']}</Text>
            <View style={styles.row}>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['mark-10']}</Text>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['mark-12']}</Text>
            </View>
            <View style={styles.row}>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['register_number']}</Text>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['cutoff']}</Text>
            </View>
            <View style={styles.row}>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['country-code']}</Text>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['mobile']}</Text>
            </View>
            <View style={styles.row}>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['days-hosteller']}</Text>
                <Text multiline={false} style={[styles.text, styles.text_hotizontal]}>{data['quota']}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:14,
        flexDirection: 'column',
        padding:10,
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      },
      text: {
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        color: "#fff",
        borderColor: "#fff" ,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
      },
      text_hotizontal: {
        flex: 0.5,
        flexDirection: 'row',
        marginHorizontal: 2.5,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'space-between',
        justifyContent: 'space-between'
      }
});