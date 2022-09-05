import { View, Text } from "react-native";
import React from "react";
import Field from "../../../ui/Field";
import useProfile from "./useProfile";
import Button from "../../../ui/Button";
import { useAuth } from "../../../hooks/useAuth";
import Layout from "../../layout/Layout";
import { Heading } from "../../../ui/Heading";
import Padding from "../../../ui/Padding";
import Loader from "../../../ui/Loader";
import { useUpdateProfile } from "./useUpdateProfile";

const Profile = () => {
	const {
		isLoading: isProfileLoading,
		name,
		setName,
		profile,
	} = useProfile();
	const { logout } = useAuth();
	const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
		name,
		profile.docId,
	);
	return (
		<Layout>
			<Heading text='Profile' />
			<Padding>
				{isSuccess && (<View>
					<Text>Update profile success</Text>
				</View>)}
				{isProfileLoading || isLoading ? (
					<Loader />
				) : (
					<>
						<Field
							value={name}
							onChange={setName}
							placeholder={"Enter name"}
						/>
						<Button
							onPress={() => updateProfile()}
							title={"Update profile"}
						/>
						<Button
							onPress={() => {
								logout();
							}}
							title={"Logout"}
							colors={["#cecece", "#cecec3"]}
						/>
					</>
				)}
			</Padding>
		</Layout>
	);
};

export default Profile;
