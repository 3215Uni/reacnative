import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './src/screens/home/HomeScreen'
import { ViajeScreen } from './src/screens/viaje/ViajeScreen'
import { ProfileScreen } from './src/screens/profile/ProfileScreen'
import { LocationListStackScreen } from './src/screens/location-list/LocationListStackScreen'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SPACING } from './src/utils/theme'

const Tab = createBottomTabNavigator()



const TAB_ICON = {
  Inicio: 'home',
  Perfil: 'person',
  Viajes: 'trail-sign-sharp',
  Sugerencias: 'map-sharp'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]// TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export default function App () {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name='Inicio' component={HomeScreen} />
          <Tab.Screen name='Sugerencias' component={LocationListStackScreen} />
          <Tab.Screen name='Viajes' component={ViajeScreen} />
          <Tab.Screen name='Perfil' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs,   
      backgroundColor: '#000000', 
  }
})