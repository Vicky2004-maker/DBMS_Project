import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Pressable, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function Login({route, navigation}) {

    const [number, setNumber] = useState(0);
    const [passInput, setPass] = useState("");

    const [authentic, setAuthentic] = useState(false);
    const [student_name, setStudentName] = useState("");

    authenticate = async = () => {
      return fetch(`http://192.168.29.171:8989/authenticate-get-username/${number}/${passInput}`)
      .then(response => response.json())
      .then(data => {return data})
    }

    return (
          <View style={styles.container}>
            <LinearGradient colors={['rgba(0, 0, 0, 1)', 'transparent']} style={[styles.container, styles.background]}>
            <View style={styles.empty}>
    
            </View>
            <View style={styles.top}>
              <Text style={styles.header}>LOGIN</Text>
              <TextInput onChangeText={setNumber} multiline={false} style={styles.input} inputMode='numeric' placeholderTextColor={"#b8b8b8"} placeholder='Register Number' />
              <TextInput onChangeText={setPass} multiline={false} style={styles.input} placeholderTextColor={"#b8b8b8"} placeholder='Password' secureTextEntry={true}/>
              <View style={styles.button}>
                <Pressable onPress={async () => {
                  const data = await this.authenticate();
                  setStudentName(data['username_real']);
                  if(data['password_real'] == passInput) {
                    navigation.navigate('Home', {
                      title: student_name,
                      address: data['address'],
                      country_code: data['country-code'],
                      cutoff: data['cutoff'],
                      days_hosteller: data['days-hosteller'],
                      degree: data['degree'],
                      department: data['department'],
                      dob: data['dob'],
                      doj: data['doj'],
                      mark_10: data['mark-10'],
                      mark_12: data['mark-12'],
                      mobile: data['mobile'],
                      name: data['name'],
                      quota: data['quota'],
                      register_number: data['register_number'],
                      semester: data['semester']
                    });
                  } else {
                    Alert.alert('Warning', 'Wrong Password');
                  }
                }}>
                  <Text style={{color: 'white', fontWeight: '900'}}>Login</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.bottomText}>
              <Text style={{color: 'grey'}}>Tutor Record</Text>
              <Text style={{color: 'grey'}}>1.0</Text>
            
            </View>
            </LinearGradient>
          </View>
      );
    }
    
    
    const styles = StyleSheet.create({
      gradient_rotate: {
        transform: [
          {rotate: '45deg'}
        ],
      },
      container: {
        flex: 1,
        fontSize:14,
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      header: {
        fontSize:30,
        color: 'white'
      },
      input: {
        borderColor: "#fff",
        borderRadius:5,
        borderWidth: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        padding: 7.5,
        color: "#fff"
      },
      button: {
        marginTop:10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        padding:10,
        borderRadius: 10,
        elevation: 5,              
        shadowColor: '#030002',    
        shadowOpacity: 0.25,       
        shadowRadius: 5 
      },
      bottomText: {
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        
      },
      top: {
        padding:15
      },
      empty: {
        flex:0.25
      },
      background: {
        backgroundColor: "#310031",
      },
      input_parent: {
        flex:1,
        flexDirection: 'row',
        borderWidth:1,
        borderRadius:5,
        borderColor: '#fff',
        alignItems:'center'
      }
});