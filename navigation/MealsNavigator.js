import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
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

const MealsFavTabNavigator = createBottomTabNavigator(
  // route map
  {
    Meals: {
      screen: navigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        }
      } // only matters when inside of another navigator
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'My Favorites',
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        }
      }
    }
  },
  // route config
  {
    tabBarOptions: {
      activeTintColor: Color.accentColor
    }
  }
)

export default createAppContainer(MealsFavTabNavigator)