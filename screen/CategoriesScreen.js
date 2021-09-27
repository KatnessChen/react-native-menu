import React, { Fragment } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import { CATEGORIES } from '../data/categories'

const renderGridItem = itemData => {
  return (
    <View><Text>{itemData.item.title}</Text></View>
  )
}

const CategoriesScreen = props => {
  return (
    <Fragment>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
      <View style={styles.screen}>
        <Text>CategoriesScreen</Text>
        <Button title="go to meals" onPress={() => {
          props.navigation.navigate({ routeName: 'CategoriesMeals' })
        }}/>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen