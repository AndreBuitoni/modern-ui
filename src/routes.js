import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts, JollyLodger_400Regular} from '@expo-google-fonts/jolly-lodger'

import {Home} from './screens/Home'
import Drink from './screens/Drink'
import Guia from './screens/Guia'
import Profile from './screens/Profile'
import Lojas from './screens/Lojas'

import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

function Routes() {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='history'
      screenOptions={{
        headerTitleStyle: {
          color: '#FFFFFF',
          // fontFamily: 'JollyLodger_400Regular',
        },
        headerStyle: {
          backgroundColor: '#181818',
        },
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#441164',
        tabBarActiveTintColor: '#EEEEEE',
        tabBarInactiveTintColor: '#441164',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#E5BCFE',
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 0,
          height: 70,
        }
      }}
    >
      <Tab.Screen
        name='Meu Bar'
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={40} color={color} />
            }
            return <Ionicons name="home" size={30} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='Fazer Drink'
        component={Drink}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <FontAwesome5 name="glass-martini" size={35} color={color} />
            }
            return <FontAwesome5 name="glass-martini" size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={40} color={color} />
            }
            return <Ionicons name="person" size={30} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='Guia'
        component={Guia}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <FontAwesome5 name="book" size={35} color={color} />
            }
            return <FontAwesome5 name="book" size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='Lojas'
        component={Lojas}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="md-cart" size={45} color={color} />
            }
            return <Ionicons name="md-cart" size={35} color={color} />
          }
        }}
      />
      
    </Tab.Navigator>
  )
}

export default Routes