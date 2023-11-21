import * as React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './Home'
import {Fav} from './Fav'
import {Perfil} from './Perfil'

const Stack = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Fav' component={Fav}/>
                <Stack.Screen name='Perfil' component={Perfil}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppRoutes;