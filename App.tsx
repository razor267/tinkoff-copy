import React from "react";
import { LogBox } from "react-native";
import StoryContainer from "./components/screens/home/stories/StoryContainer";
import Navigation from "./navigation/Navigation";
import { AuthProvider } from "./providers/AuthProvider";
import { DataProvider } from "./providers/DataProvider";

export default function App() {
	return (
		<AuthProvider>
			<DataProvider>
				<StoryContainer />
				<Navigation />
			</DataProvider>
		</AuthProvider>
	);
}
LogBox.ignoreAllLogs();
