import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform } from 'react-native';
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

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: navigator,
  Favorites: FavoritesScreen
})

export default createAppContainer(MealsFavTabNavigator)