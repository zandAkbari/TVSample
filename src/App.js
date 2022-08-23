import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  FlatList,
} from 'react-native';
import { Cart } from "./components/Cart.js";
import AlmaLogo from './images/Alma.jpg';
import EchoesLogo from './images/Echoes.jpg';
const isNative = Platform.OS !== 'web';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      data : [{"image":AlmaLogo,"name":"Alma"},{"image":EchoesLogo,"name":"Echoes"}]
    };
  }
  onPress(index){
    console.log(index)
  }
  render() {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
            contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.mainBox}>

              <FlatList
                  horizontal
                  data={ this.state.data }
                  renderItem={ ( { item, index } ) =>
                      <Cart styles={cartStyles} onPress={()=>{this.onPress(index)}}  itemData={item} >

                      </Cart>
                  }
              />
            </View>
          </View>
        </ScrollView>

    );
  }
}




const styles = StyleSheet.create({

  mainBox:{
    padding:30
  },
  scrollView: {
    width: '100%',
    height:'100%',
    flex: 1,
    backgroundColor: '#282c34',
  },
  container: {
    flex: 1,
    width: '100%',
    height:'100%',

    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },





});
const cartStyles = StyleSheet.create({
  cart:{
    width:300,
    height:500,
    display:"flex",
    flexDirection:"column",
    borderWidth:8,borderColor:"transparent",position:"relative"
  },
  imageBox:{
    borderColor:"transparent",borderWidth:8,
  },
  selectedCart:{
    borderColor:"rgb(253, 193, 60)",borderWidth:8,
  },
  // rgb(253, 193, 60)
  // rgb(238, 238, 238)
  focusedCrat:{
    borderColor:"rgb(238, 238, 238)",borderWidth:8,
  },
  logo: {
    width: "100%",
    height: 400,
  },
  name: {
    color: 'rgb(253, 193, 60)',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:"center",
    width:"100%",
    padding:10

  },
});
export default App;
