import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";

interface IData {
	email: string;
	password: string;
}

const Auth = () => {
	const { isLoading, login, register } = useAuth();
	const [isReg, setIsReg] = useState<boolean>(false);
	const [data, setData] = useState<IData>({} as IData);

	const authHandler = async ()=>{
		const {email, password} = data
		if (isReg) await register(email,password) 
		else await login(email,password)
		setData({} as IData)
	}
	return (
		<View style={styles.styleCenter}>
			<View style={styles.auth}> 
				<View style={{ width: "75%" }}>
					<Text style={styles.h1}>
						{isReg ? "Sing Up" : "Sing In"}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<Field
								value={data.email}
								onChange={(value) =>
									setData({ ...data, email: value })
								}
								placeholder={"Enter email"}
							/>
							<Field
								value={data.password}
								onChange={(value) =>
									setData({ ...data, password: value })
								}
								placeholder={"Enter password"}
								isSecure={true}
							/>
							<Button onPress={authHandler} title={`Let's Go`}/>
							<Pressable  onPress={()=>setIsReg(!isReg)}><Text style={styles.pressable}>{!isReg ? "Registration" : "login"}</Text></Pressable>
						</>
					)}
				</View>
			</View>
		</View>
	);
};

export default Auth;

const styles = StyleSheet.create({
	styleCenter: {
		flex: 1,
		height: "100%",
		width: "100%",
		backgroundColor: "white",
		paddingTop: 16,
	},
	auth: { flex: 1, justifyContent: "center", alignItems: "center" },
	h1: {
		textAlign: "center",
		color: "#3c3c3c",
		fontWeight: "bold",
		marginBottom: 2,
		fontSize: 24,
	},
	pressable: {
		opacity: 30,
		textAlign: 'right',
		fontSize: 16,
		color: '#a0a0a0'
	}
});
