import React, { Fragment } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import CATEGORIES from '../data/dummy_categories'


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