import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealScreen</Text>
      <Button title="go to detail" onPress={() => {
        props.navigation.navigate({ routeName: 'MealsDetail' })
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealScreen