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
        <FontAwesome name = 'barcode' color='#000000' size={72}/>
        <FontAwesome name = 'barcode' color='#000000' size={72}/>
      </TouchableOpacity>
      <Text>
        Tab the barcode to add task
      </Text>        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderTopWidth: 2,
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
  barcode: {
    width: 200,
    height: 50,
    backgroundColor: '#000000',
  }
})

export default withContext(AddTask)