import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlightBase,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import DeleteButton from './DeleteButton'
import { withContext } from 'react-simplified-context'

const TodoItem = ({
  todo: {
    id,
    title,
    date,
    finished,
  },
  toggle,
  remove,
}) => {
  return (
    <Swipeable
      renderRightActions={ () => <DeleteButton onPress={() => remove(id)}/>}
      >
      <View style={styles.container}>
        <View style={styles.todo}>
          <View style={styles.itemBox}>
            <View style={styles.textBox}>
              <Text style={styles.title}>
              {date}
              </Text>
            </View>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress = {() => toggle(id)}
            style ={finished ? styles.finished : styles.check}
          >
            <FontAwesome name = 'check' color={finished? '#ffffff' : '#e0e0e0'} size={14}/>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#f1f1f1'
  },
  todo: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5'
  },
  itemBox: {
    flexDirection: 'row',
  },
  textBox: {
    width: 60,
  },
  title: {
    fontSize: 16,
    color: '#424242',
    fontWeight: '600',
  },
  check: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  finished: {
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#6830cf',
  },
})

export default withContext(TodoItem)