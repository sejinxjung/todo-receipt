import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native'
import {withContext} from 'react-simplified-context'
import TodoItem from '../components/TodoItem'

const ListScreen = ({
  todos,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Listscreen
      </Text>
      <FlatList
        data={todos}
        renderItem={({item}) => { return <TodoItem todo={item} /> 
        }}
        keyExtractor={(item) => {return `${item.id}`}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default withContext(ListScreen)