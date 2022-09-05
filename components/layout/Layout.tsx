import { View, ScrollView, StyleSheet } from 'react-native'
import React, { FC, ReactNode } from 'react'

interface ILayout {
  children: ReactNode
  isScrollView?: boolean

}
// export const styleCenter = tw('h-full w-full bg-white pt-16')

const Layout:FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <View style={styles.styleCenter}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  styleCenter: {
    backgroundColor: 'white',
    paddingTop: 40,
    height: '100%',
    width: '100%'
  }
})