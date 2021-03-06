import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import MEALS from '../data/dummy_meal'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

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
    headerTitle: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
    )
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