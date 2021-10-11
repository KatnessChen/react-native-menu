import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import MEALS from '../data/dummy_meal'

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId')
  const meal = MEALS.find(meal => meal.id === mealId)
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Text>{meal.title}</Text>
      <Button title="pop To Top" onPress={() => {
        props.navigation.popToTop()
      }}/>
    </View>
  )
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')
  const meal = MEALS.find(meal => meal.id === mealId)
  return {
    headerTitle: meal.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen