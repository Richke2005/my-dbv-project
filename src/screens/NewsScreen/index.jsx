import React, { useMemo, useRef } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";


export default function NewsScreen() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleExpandAction = () => bottomSheetRef.current?.expand();
  const handleCloseAction = () => bottomSheetRef.current?.close();

  
    return <View style={{ flex: 1}}>
    <Text>News</Text>
      <Button 
      title="Expand"
      onPress={handleExpandAction}/>

      <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={{backgroundColor: "grey"}}
      enablePanDownToClose={true}
      >
        <BottomSheetView style={{
            flex: 1,
            padding: 36,
            alignItems: 'center',
          }}>
          
            <Text>Content</Text>
            <Button
            title="Close"
            onPress={handleCloseAction}/>
              
          
        </BottomSheetView>
      </BottomSheet>
  </View>;
}