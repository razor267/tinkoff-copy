import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import Padding from "../../../../../ui/Padding";
import Button from "../../../../../ui/Button";
import { asyncAlert } from "./asyncAlert";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useAuth } from "../../../../../hooks/useAuth";

const ApplyNewProducts = () => {
	const { user } = useAuth();
	const [err, setErr] = useState<Error | null>(null);

	const registerHendler = async () => {
		try {
			const currency = await asyncAlert({
				title: "Currency",
				msg: "Select account currency",
				buttons: {
					text: "RUB",
					resolveValue: "RUB",
					textSecond: "USD",
					resolveValueSecond: "USD",
				},
			});
			const typeCard = await asyncAlert({
				title: "Type Card",
				msg: "type card",
				buttons: {
					text: "Black",
					resolveValue: "Tinkoff Black",
					textSecond: "All Airline",
					resolveValueSecond: "Tinkoff All Airline",
				},
			});
			await addDoc(collection(db, "accounts"), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				balance: 0,
				cardNumber: '1234 1234 1234 4567', //здесь будет функция генерации 4 чисел по 4цифры
				currency,
				name: typeCard

			});
		} catch (error) {
			if (error instanceof Error) {
				setErr(error);
			}
			Alert.alert("Error apply new product", err?.message);
		}
	};
	return (
		<Padding>
			<Button
				onPress={registerHendler}
				title={"Apply for a new product"}
			/>
		</Padding>
	);
};

export default ApplyNewProducts;
