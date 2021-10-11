import React from 'react'
import { View, StyleSheet } from 'react-native'
import MealList from '../components/MealList'

import CATEGORIES from '../data/dummy_categories'
import MEALS from '../data/dummy_meal'

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) !== -1)

  const handelSelect = mealId => {
    props.navigation.navigate({
      routeName: 'MealDetail',
      params: { mealId }
    })
  }
  return (
    <View style={styles.screen}>
      <MealList
        meals={meals}
        onSelect={handelSelect}
      />
    </View>
  )
}

// dynamic screen header title
CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const category = CATEGORIES.find(item => item.id === categoryId)
  return {
    headerTitle: category.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default CategoryMealsScreen