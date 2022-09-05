import { View, Text, Pressable, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { IStory } from './types'
import { useData } from '../../../../hooks/useData'

const StoryItem: FC<{story: IStory}> = ({story}) => {
  const {setActiveStories} = useData()

  return (
    <Pressable onPress={()=> setActiveStories(story.images)}>
      <View style={{height: 130, width: 130, marginLeft: 12}}>
        <Text>{story.heading}</Text>
        <ImageBackground source={{uri: story.images[0]}} style={{width: '100%', height: '100%', justifyContent: 'flex-end'}} imageStyle={{borderRadius: 24}} resizeMode={'cover'} />
      </View>
    </Pressable>
  )
}

export default StoryItem