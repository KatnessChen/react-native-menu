import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screen/CategoriesScreen'
import CategoryMealScreen from '../screen/CategoryMealScreen'
import MealDetailScreen from '../screen/MealDetailScreen'

const navigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoriesMeals: {
    screen: CategoryMealScreen
  },
  MealsDetail: MealDetailScreen,
})

export default createAppContainer(navigator)