import React, { Fragment } from 'react'
import { FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CategoryGridTile from '../components/CategoryGridTile'
import HeaderButton from '../components/HeaderButton'
import CATEGORIES from '../data/dummy_categories'

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        itemData={itemData.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: itemData.item.id }
          })
        }}
      />
    )
  }
  return (
    <Fragment>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </Fragment>
  )
}

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer()
        }} />
      </HeaderButtons>
    )
  }
}

export default CategoriesScreen