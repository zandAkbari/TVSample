import React, { Component } from "react";
import {Image, Pressable, Text, View} from "react-native";
import EchoesLogo from './../images/Echoes.jpg';
export const Cart = class Cart extends Component {

    render() {

        const { styles } = this.props;
        return (
            <View

                style={[styles.cart]}
            >
                <Pressable style={[styles.focusedCra]}>
                    <Image
                        source={EchoesLogo}
                        style={[styles.logo]}
                    />
                </Pressable>
                <View>
                    <Text style={styles.name}>test</Text>
                </View>

            </View>



        );
    }
};
