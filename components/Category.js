import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const Category = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.itemBox}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              Date
            </Text>
          </View>
          <Text style={styles.text}>
            Item
          </Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Check
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  itemBox: {
    flexDirection: 'row',
  },
  textBox: {
    width: 76,
    alignItems: 'center',
  },
  text: {
    marginVertical: 4,
    fontSize: 18,
    fontWeight: '600',
  },
})
export default Category