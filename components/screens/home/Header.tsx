import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Padding from "../../../ui/Padding";
import Avatar from "../../../ui/Avatar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import useProfile from "../profile/useProfile";

const Header: FC = () => {
	const { navigate } = useNavigation();
  const { isLoading, name} = useProfile()
	return (
		<Padding style={styles.container}>
			<Avatar name={name} size='large' />
			<TouchableOpacity
				onPress={() => navigate("Profile")}
				style={{ alignItems: "flex-end" }}>
				<Text>{name}</Text>
				<Entypo size={28} name='chevron-right' />
			</TouchableOpacity>
		</Padding>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
});
export default Header;
