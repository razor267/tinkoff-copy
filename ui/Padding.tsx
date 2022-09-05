import { View } from "react-native";
import React, { FC, ReactNode } from "react";

const Padding: FC<{ style?: any; children: ReactNode }> = ({ children, style }) => {
	return <View style={{ paddingHorizontal: 18, ...style }}>{children}</View>;
};

export default Padding;
