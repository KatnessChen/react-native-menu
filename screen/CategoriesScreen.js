import React, { Fragment } from 'react'
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import CATEGORIES from '../data/categories'


const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        itemData={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoriesMeals',
            params: { categoryId: itemData.item.id }
          })
        }}
      />
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
  }
})

export default CategoriesScreen