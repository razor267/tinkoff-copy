import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface IAvatar {
  name?: string | null
  size?: 'small' | 'large'
}
const Avatar:FC<IAvatar> = ({name, size = 'small'}) => {
  const isSmall = size === 'small'
  return (
    <View style={[styles.avatar, isSmall? styles.small : styles.large ]}>
      <Text style={{fontWeight: '500', fontSize: 20}}>{name?.toUpperCase().slice(0,1)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 10000000,
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    width:30,
    height: 30,
    marginRight: 12
  },
  large: {
    width:50,
    height: 50,
    marginRight: 12
  }
})

export default Avatar