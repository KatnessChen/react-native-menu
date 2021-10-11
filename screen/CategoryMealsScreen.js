import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import CATEGORIES from '../data/dummy_categories'
import MEALS from '../data/dummy_meal'

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) !== -1)
  const renderMealItem = itemData => {
    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: { mealId: itemData.item.id }
          })
        }}
      />
    )
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{width: '100%', padding: 15}}
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
    backgroundColor: 'gold'
  }
})

export default CategoryMealsScreen