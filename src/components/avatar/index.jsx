import React from 'react';
import { Image, View } from 'react-native';
import { IconButton, Text, Button, Dialog, Portal, TextInput } from 'react-native-paper';

const Avatar = ({ source, size, borderColor, style, ...props }) => {
    const [image, setImage] = React.useState(source);
    const [visible, setVisible] = React.useState(false);
    
    return <View style={[{ 
        display: 'flex',
        width: (size*1.25), 
        height: (size*1.25), 
        borderRadius: (size*1.25) / 2,
        borderWidth: 1.5,
        borderColor: (borderColor) ? borderColor : 'black',
        justifyContent: 'center',
        alignItems: 'center' 
        }, style]} {...props}>
        <View style={{ 
            display: 'flex',
            width: (size*1.10), 
            height: (size*1.10), 
            borderRadius: (size*1.10) / 2,
            borderWidth: 1,
            borderColor: borderColor,
            justifyContent: 'center',
            alignItems: 'center' 
            }}>
            <Image
                style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2
                }}
                source={{uri: image}}
            />
            <IconButton
            style={{
                position: "absolute",
                bottom: 0,
                right: (size/2) - 0.35*size,
                backgroundColor: borderColor,
            }}
            icon="camera"
            iconColor={"white"}
            size={0.15*size}
            onPress={() => setVisible(true)}
            />

            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Content>
                    <Text variant="bodyMedium">This is simple dialog</Text>
                    
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => console.log('Cancel')}>Cancel</Button>
                    <Button onPress={() => console.log('Ok')}>Ok</Button>
                </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
       
    </View>
}

export default Avatar;