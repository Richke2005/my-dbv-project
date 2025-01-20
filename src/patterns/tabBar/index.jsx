import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { useTheme } from "@react-navigation/native";

export default function TabBar({ state, descriptors, navigation }) {
	const { colors } = useTheme();
	
	return (

	  <View style={[styles.tabBarContainer, { backgroundColor: colors.background }]}>
		{state.routes.map((route, index) => {
		  const { options } = descriptors[route.key];
		  const label =
			options.tabBarLabel !== undefined
			  ? options.tabBarLabel
			  : options.title !== undefined
			  ? options.title
			  : route.name;
  
		  const isFocused = state.index === index;

		  const onPress = () => {
			const event = navigation.emit({
			  type: 'tabPress',
			  target: route.key,
			  canPreventDefault: true,
			});
  
			if (!isFocused && !event.defaultPrevented) {
			  navigation.navigate(route.name);
			}
		  };
  
		  const onLongPress = () => {
			navigation.emit({
			  type: 'tabLongPress',
			  target: route.key,
			});
		  };
		
		  return (
			<Pressable
			  key={index}
			  accessibilityState={isFocused ? { selected: true } : {}}
			  accessibilityLabel={options.tabBarAccessibilityLabel}
			  testID={options.tabBarButtonTestID}
			  onPress={onPress}
			  onLongPress={onLongPress}
			  style={[
				styles.tabItem, 
				isFocused && styles.tabItemFocused, 
				{ flex: 1, alignItems: 'center', padding: 10 }
				]}>
			  <Text style={[styles.tabText, { color: isFocused ? colors.primary : colors.text }]}>
				{label}
			  </Text>
			</Pressable>
		  );
		})}
	  </View>
	);
}

const styles = StyleSheet.create({
	tabBarContainer: {
	  flexDirection: "row",
	  borderTopWidth: 1,
	  borderTopColor: "#ccc",
	  paddingVertical: 15,
	  paddingHorizontal: 5,
	  shadowColor: "#000",
	  shadowOpacity: 0.1,
	  shadowOffset: { width: 0, height: -2 },
	  shadowRadius: 3,
	  elevation: 5, // For Android shadow
	},
	tabItem: {
	  flex: 1,
	  alignItems: "center",
	  justifyContent: "center",
	  paddingVertical: 8,
	  borderWidth: 2,
	  borderRadius: 10,
	  marginHorizontal: 5,
	  borderColor: "transparent",
	},
	tabItemFocused: {
	  backgroundColor: "#f0f0f0",
	},
	tabText: {
	  fontSize: 14,
	  fontWeight: "bold",
	},
  });
