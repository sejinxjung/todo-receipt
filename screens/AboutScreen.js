import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native'

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Aboutscreen
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default AboutScreen