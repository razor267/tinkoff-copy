import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { useStories } from "./useStories";
import Loader from "../../../../ui/Loader";
import StoryItem from "./StoryItem";

const Stories: FC = () => {
	const { stories, isLoading } = useStories();
  
	return (
		<View>
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 250}}>
					{stories.map((story) => (
						<StoryItem key={story._id} story={story} />
					))}
				</ScrollView>
			)}
		</View>
	);
};

export default Stories;
