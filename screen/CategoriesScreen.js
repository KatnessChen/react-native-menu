import React, { Fragment } from 'react'
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Color from '../constants/Color'

import CATEGORIES from '../data/categories'


const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.grid}
          onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoriesMeals',
            params: { categoryId: itemData.item.id }
          })
        }}
      >
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <Fragment>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    </Fragment>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen