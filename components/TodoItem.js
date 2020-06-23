import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
  edit,
  isEditing,
}) => {
  return (
    <Swipeable
      renderRightActions={ () => <DeleteButton onPress={() => remove(id)}/>}
      >
      <View style={styles.container}>
        <View style={styles.todo}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 54, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={finished ? styles.findate : styles.date}>
              {date}
              </Text>
            </View>
            <View style={styles.item}>
            <TouchableOpacity
              id={id}
              activeOpacity={0.8}
              onPress={(id)=> edit(id)}
            >
              <Text style={finished ? styles.fintitle : styles.title}>{title}
              </Text>
            </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress = {() => toggle(id)}
            style ={styles.check}
          >
            <FontAwesome name = 'check' color={finished? '#ca3e47' : '#dddddd'} size={14}/>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#ececec'
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada'
  },
  date: {
    fontSize: 14,
    fontWeight: '700',
    color: '#385170',
  },
  findate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#bbbbbb',
  },
  item: {
    paddingLeft: 8,
  },
  title: {
    fontSize: 16,
    color: '#142d4c',
    fontWeight: '700',
  },
  fintitle: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: '#bbbbbb',
    fontWeight: '700',
    marginRight: 4,
  },
  check: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 4,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  fincheck: {
    borderRadius: 4,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6830cf',
    marginRight: 12,
  },
})

export default withContext(TodoItem)