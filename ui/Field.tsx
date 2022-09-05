import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";

interface IField {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	isSecure?: boolean;
}

const Field: FC<IField> = ({ placeholder, value, onChange, isSecure }) => {
	return (
		<TextInput
			style={styles.input}
			placeholder={placeholder}
			value={value}
			onChangeText={onChange}
			secureTextEntry={isSecure}
			autoCapitalize='none'
		/>
	);
};

export default Field;

const styles = StyleSheet.create({
	input: {
		borderRadius: 12,
		backgroundColor: "#edeef0",
		marginTop: 8,
		padding: 8,
	},
});
