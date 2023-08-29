import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {Home} from './screens/Home'
import Drink from './screens/Drink'
import Guia from './screens/Guia'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator()

function Routes() {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name='Meu Bar'
        component={Home}
      />
      <Tab.Screen
        name='Fazer Drink'
        component={Drink}
      />
      <Tab.Screen
        name='Guia'
        component={Guia}
      />
      <Tab.Screen
        name='Perfil'
        component={Profile}
      />
    </Tab.Navigator>
  )
}

export default Routes