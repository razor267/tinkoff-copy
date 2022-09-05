import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IStory } from "./types";
import { db } from "../../../../firebase";

export const useStories = () => {
	const [stories, setStories] = useState<IStory[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(
		() => 
			onSnapshot(
				query(
					collection(db, "stories"),
					),
				(snapshot) => {
					setStories(
						snapshot.docs.map(
							(d) =>
								({
									_id: d.id,
									...d.data(),
								} as IStory),
						),
					);
					setIsLoading(false);
				},
			),
		[],
	);
	return { stories, isLoading };
};
