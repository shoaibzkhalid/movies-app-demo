import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { colors } from 'styles/colors'
import { shadows } from 'styles/shadows'

import More from '@/screens/More'
import Icon from '@/components/Icon'
import MediaLibrary from '@/screens/MediaLibrary'
import MoviesList from '@/screens/watch/MoviesUpcoming'
import { TabNavParamList } from '@/types/navigation/tabs'

const Tab = createBottomTabNavigator<TabNavParamList>()
const ICON_SIZE = 24

export default function TabNavigator() {
  const getIconColor = (focused: boolean) => (focused ? colors.white : colors.inActiveTab)

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 10,
          ...shadows.card,
          backgroundColor: colors.tabBar,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        animation: 'fade',
        tabBarLabelStyle: { color: colors.white, paddingTop: 7 },
        tabBarLabel: ({ focused, children }) => (
          <Text className={`${focused ? 'text-white' : 'text-inActiveTab'}  mt-2 text-xs`}>
            {children}
          </Text>
        ),
      }}>
      <Tab.Screen
        name="Dashboard"
        component={MoviesList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="dashboard"
              width={ICON_SIZE}
              height={ICON_SIZE}
              color={getIconColor(focused)}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Watch"
        component={MoviesList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="watch" width={ICON_SIZE} height={ICON_SIZE} color={getIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Media Library"
        component={MediaLibrary}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="library"
              width={ICON_SIZE}
              height={ICON_SIZE}
              color={getIconColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="more"
              width={ICON_SIZE + 4}
              height={ICON_SIZE + 4}
              color={getIconColor(focused)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
