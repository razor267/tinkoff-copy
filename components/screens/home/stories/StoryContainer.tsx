import { View, Text } from "react-native";
import React, { FC } from "react";
import { useData } from "../../../../hooks/useData";
//@ts-ignore
import { StoryContainer as SC} from "react-native-stories-view";

const StoryContainer: FC = () => {
	const { activeStories, setActiveStories } = useData();
	return (
		activeStories && (
			<SC visible enableProgress images={activeStories} duration={20} onComplete={()=> setActiveStories(null)} containerStyle={{width: "100%", height: '100%'}}/>
		)
	);
};

export default StoryContainer;
