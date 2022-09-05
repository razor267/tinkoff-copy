import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { IAccount } from './types'


const AccountItem:FC<{account: IAccount}> = ({account: {name, currency, cardNumber, balance,}}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{currency}</Text>
      <Text>**{cardNumber.slice(-4)}</Text>
      <Text style={{fontWeight:'bold'}}>{balance}</Text>
    </View>
  )
}

export default AccountItem