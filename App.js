import { StyleSheet } from 'react-native'
import React from 'react'
import StackNavigator from './StackNavigator'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})