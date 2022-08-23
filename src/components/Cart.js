import React, { Component } from "react";
import {Image, Pressable, Text, View} from "react-native";

export const Cart = class Cart extends Component {

    render() {

        const { styles,itemData,onPress } = this.props;
        return (
            <View

                style={[styles.cart]}
            >
                <Pressable onPress={onPress} style={[styles.focusedCra]}>
                    <Image
                        source={itemData.image}
                        style={[styles.logo]}
                    />
                </Pressable>
                <View>
                    <Text style={styles.name}>{itemData.name}</Text>
                </View>

            </View>



        );
    }
};
