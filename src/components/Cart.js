import React, { Component } from "react";
import {Image, Pressable, Text, View} from "react-native";

export const Cart = class Cart extends Component {

    render() {

        const { styles,itemData,onPress,isFocused,isSelected } = this.props;
        return (
            <View

                style={[styles.cart]}
            >
                <Pressable onPress={onPress}  style={[styles.imageBox,isFocused?styles.focusedCrat:'',isSelected?styles.selectedCart:'']}>
                    <Image
                        source={itemData.image}
                        style={[styles.logo]}
                    />
                </Pressable>
                <View>
                    <Text style={styles.name}>{isSelected?itemData.name:""}</Text>
                </View>

            </View>



        );
    }
};
