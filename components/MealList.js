import React from 'react'
import MealItem from './MealItem'
import { FlatList, StyleSheet } from 'react-native'

const MealList = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() => {
          props.onSelect(itemData.item.id)
        }}
      />
    )
  }

  return (
    <FlatList
      data={props.meals}
      keyExtractor={item => item.id}
      renderItem={renderMealItem}
      style={{width: '100%', padding: 15, ...styles.list}}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'gold'
  }
})

export default MealList