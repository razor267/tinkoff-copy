import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface IButton {
  onPress: ()=> void
  title: string
  colors?: [string, string]
}

const Button: FC<IButton> = ({onPress, title, colors=['yellow', '#fbbf24']}) => {
  const styles = StyleSheet.create({
    btn: {
      borderRadius: 12,
      backgroundColor: colors[1],
      marginTop: 24,
      padding: 8,
    },
    text: {
      textAlign: 'center',
      color: '#3c3c3c'
    }
  });
  return (
    <TouchableHighlight onPress={onPress} style={styles.btn} underlayColor={colors?.[1] }>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}


export default Button