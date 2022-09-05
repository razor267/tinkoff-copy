import { query, collection, onSnapshot, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IAccount } from "./types";
import { db } from "../../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";

export const useAccounts = () => {
	const {user} = useAuth()
	const [accounts, setAccounts] = useState<IAccount[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(
		() => 
			onSnapshot(
				query(
					collection(db, "accounts"), where('userId', '==', user?.uid )
					),
				(snapshot) => {
					setAccounts(
						snapshot.docs.map(
							(d) =>
								({
									_id: d.id,
									...d.data(),
								} as IAccount),
						),
					);
					setIsLoading(false);
				},
			),
		[],
	);
	return { accounts, isLoading };
};

