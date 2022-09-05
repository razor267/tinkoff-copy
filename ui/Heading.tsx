import { Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import Padding from "./Padding";

export const Heading: FC<{ text: string }> = ({ text }) => {
	return (
		<Padding>
			<Text style={styles.heading}>{text}</Text>
		</Padding>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontWeight: "bold",
		color: "#cecece",
		fontSize: 24,
	},
});
