import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { withContext } from 'react-simplified-context'

const AddTask = ({
  show,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style = {{flexDirection: 'row'}}
        activeOpacity={0.8}
        onPress={show}
      >
        <FontAwesome name = 'barcode' color='#5588a3' size={72}/>
        <FontAwesome name = 'barcode' color='#5588a3' size={72}/>
      </TouchableOpacity>
      <Text style={styles.text}>
        Tab the Barcode To Add Task
      </Text>        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  text: {
    marginBottom: 4,
    fontSize: 12,
    fontWeight: '700',
    color: '#5588a3'
  },
})

export default withContext(AddTask)