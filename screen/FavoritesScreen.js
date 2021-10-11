import React from 'react'
import { View, StyleSheet } from 'react-native'
import MealList from '../components/MealList'

import MEALS from '../data/dummy_meal'

const favoriteMealIds = ['m5', 'm10']

const FavoritesScreen = props => {
  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.indexOf(meal.id) !== -1)

  const handelSelect = mealId => {
    props.navigation.navigate({
      routeName: 'MealDetail',
      params: { mealId }
    })
  }

  return (
    <View style={styles.screen}>
      <MealList
        meals={favoriteMeals}
        onSelect={handelSelect}
      />
    </View>
  )
}

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen