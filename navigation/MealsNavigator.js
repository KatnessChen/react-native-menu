import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Color from '../constants/Color'

import CategoriesScreen from '../screen/CategoriesScreen'
import CategoryMealsScreen from '../screen/CategoryMealsScreen'
import MealDetailScreen from '../screen/MealDetailScreen'
import FavoritesScreen from '../screen/FavoritesScreen'

const navigator = createStackNavigator(
  // route map
  {
    Categories: {
      screen: CategoriesScreen,
      headerTitle: 'Meals Categories'
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen,
  },
  // route config
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '#FFF'
      },
      headerTintColor: Platform.OS === 'android' ? '#FFF' : Color.primaryColor
    }
  }
)

const tabScreenConfig = {
  Meals: {
    screen: navigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Color.primaryColor
    } // only matters when inside of another navigator
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'My Favorites',
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Color.accentColor
    }
  }
}
const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
    // shifting: false 之下可以設定
    // barStyle: {
    //   backgroundColor: Color.primaryColor
    // }
  })
  : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Color.accentColor
    }
  })

export default createAppContainer(MealsFavTabNavigator)