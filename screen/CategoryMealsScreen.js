import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import CATEGORIES from '../data/dummy_categories'

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')
  const category = CATEGORIES.find(item => item.id === categoryId)
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Text>{category.title}</Text>
      <Button title="go to detail" onPress={() => {
        props.navigation.navigate({ routeName: 'MealsDetail' })
      }}/>
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
    alignItems: 'center'
  }
})

export default CategoryMealsScreen