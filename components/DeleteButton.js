import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native'

const DeleteButton = ({
  onPress,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.text}>
          Del
        </Text>
      </TouchableOpacity>
      <View style={styles.blank}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  button: {
    width: 45,
    height: 50,
    backgroundColor: '#fe5746',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: '#fff',
    fontWeight: '600'
  },
  blank: {
    width: 8,
    height: 50,
  }
})
export default DeleteButton