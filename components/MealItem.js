import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
          <ImageBackground
            source={{uri: props.item.imageUrl}}
            style={styles.bgImage}
          >
            <Text
              style={styles.title}
              numberOfLines={1}
            >
              {props.item.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
          <Text>{props.item.duration}m</Text>
          <Text>{props.item.complexity.toUpperCase()}</Text>
          <Text>{props.item.affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 15
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  mealRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  }
})

export default MealItem