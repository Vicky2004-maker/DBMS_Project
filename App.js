import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import RequestEdit from './RequestEdit';
import HomeHeader from './HomeHeader';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#310031' },
            statusBarColor:"#000",
          }}>
            <Stack.Screen name="Login" component={Login} options={{
              headerShown:false,
            }}/>
            <Stack.Screen name='Home' component={Home} options={
            ({ route }) => (
              {
                headerBackVisible:false,
                headerTitle: route.params.title
              }
            )
            }/>
            <Stack.Screen name="Request Edit" component={RequestEdit}/>
        </Stack.Navigator>
    </NavigationContainer>
)
  
};