import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Stories from "./stories/Stories";
import Accounts from "./accounts/Accounts";
import ApplyNewProducts from "./accounts/apply-new-products/ApplyNewProducts";

const Home = () => {
	return (
		<View>
			<Header />
			<Stories />
			<Accounts />
			<ApplyNewProducts />
		</View>
	);
};

export default Home;
