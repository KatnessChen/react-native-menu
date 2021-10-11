import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import Color from '../constants/Color'

import CategoriesScreen from '../screen/CategoriesScreen'
import CategoryMealsScreen from '../screen/CategoryMealsScreen'
import MealDetailScreen from '../screen/MealDetailScreen'

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

export default createAppContainer(navigator)