import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

export default function App() {
  const [displayValue, setDisplayValue] = useState('0')

  function addDigit(n) {
    setDisplayValue(n)
  }

  function clearMemory() {
    setDisplayValue('0')
  }

  function setOperation(operation) {

  }


  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label={'AC'} onClick={clearMemory}            spaces={3} />  
        <Button label={'/'} onClick={() => setOperation('/')} operation/>  
        <Button label={'7'} onClick={() => addDigit(7)}/>  
        <Button label={'8'} onClick={() => addDigit(8)}/>  
        <Button label={'9'} onClick={() => addDigit(9)}/>  
        <Button label={'*'} onClick={() => setOperation('*')} operation />  
        <Button label={'4'} onClick={() => addDigit(4)}/>  
        <Button label={'5'} onClick={() => addDigit(5)}/>  
        <Button label={'6'} onClick={() => addDigit(6)}/>  
        <Button label={'-'} onClick={() => setOperation('-')} operation/>  
        <Button label={'1'} onClick={() => addDigit(1)}/>  
        <Button label={'2'} onClick={() => addDigit(2)}/>  
        <Button label={'3'} onClick={() => addDigit(3)}/>  
        <Button label={'+'} onClick={() => setOperation('+')} operation/>  
        <Button label={'0'} onClick={() => addDigit(0)}       spaces={2}/>  
        <Button label={'.'} onClick={() => addDigit('.')}/>  
        <Button label={'='} onClick={() => setOperation('=')} operation/>  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
