import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '../../components/Avatars/circleAvatar/index.jsx';

const ProfilePicture = ({ size = 10, source= '',  borderColor = '', name, info = [], style}) => {
    return <View style={[{ 
        display: 'flex', 
        alignItems: 'center' 
        }, style]}>

        <Avatar
         size={size} 
         source={source} 
         borderColor={borderColor}
         />
         
        <View style={{ 
            padding: 5
            }}>
        <Text style={{textAlign: "center", padding: 5, fontWeight: "bold", fontSize: 15}}>{name}</Text>
        { info.map((item, index) => <Text key={index} style={{textAlign: "center", padding: 5}}>{item}</Text>) }
        </View>
    </View>
};

export default ProfilePicture;