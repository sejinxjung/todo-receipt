import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import DeleteButton from './DeleteButton'
import { withContext } from 'react-simplified-context'
import { TextInput } from 'react-native-gesture-handler'

const { height, width} = Dimensions.get("window")

const TodoItem = ({
  todo: {
    id,
    title,
    date,
    finished,
  },
  toggle,
  remove,
  update,
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
              <Text style={finished ? styles.finDate : styles.date}>
              {date}
              </Text>
            </View>
            <View style={styles.item}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=> {edit(id)}}
            >
            {isEditing ? (
              <TextInput 
                style={[{paddingTop: 0}, finished ? styles.finTitle : styles.title]}
                onChangeText={(text) => {
                  title = text
                }}
                onEndEditing={() => update(id,title)}
                onBlur={() => update(id,title)}
              >{title}
              </TextInput>
              )
            : (
              <Text style={finished ? styles.finTitle : styles.title}>
                {title}
              </Text>
            )}
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
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
    paddingBottom: 5,
  },
  date: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '700',
    color: '#385170',
  },
  finDate: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '600',
    color: '#bbbbbb',
  },
  item: {
    width: width - 140,
    paddingLeft: 8,
  },
  title: {
    paddingTop: 5,
    alignContent: 'flex-start',
    fontSize: 16,
    color: '#142d4c',
    fontWeight: '700',
  },
  finTitle: {
    fontSize: 16,
    paddingTop: 5, 
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
    marginTop: 5,
  },
})

export default withContext(TodoItem)