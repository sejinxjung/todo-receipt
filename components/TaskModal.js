import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import Modal from 'react-native-modal'
import {withContext} from 'react-simplified-context'

const TaskModal = ({
  isVisible,
  add,
  hide,
}) => {
  let content = ''
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={hide}
      avoidKeyboard
      style={styles.modal}
    >
      <View style={styles.container}>
        <TextInput
          onChangeText ={(text) => {
            content = text
          }}
          placeholder="새로운 할 일을 추가해 주세요"
          autoFocus={true}
          onEndEditing={() => add(content)}
        />
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
})

export default withContext(TaskModal)