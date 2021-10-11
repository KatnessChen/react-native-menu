
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedbackBase } from 'react-native'
import React from 'react'

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS == 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  
  return (
    <TouchableCmp
      style={styles.grid}
      onPress={props.onSelect}
    >
      <View style={{ ...styles.container, ...{ backgroundColor: props.itemData.color }}}>
        <Text style={styles.title} numberOfLines={2}>{props.itemData.title}</Text>
      </View>
    </TouchableCmp>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  grid: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoryGridTile