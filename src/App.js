import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  FlatList,
} from 'react-native';
import KeyEvent from 'react-native-keyevent';
import { Cart } from "./components/Cart.js";
import AlmaLogo from './images/Alma.jpg';
import EchoesLogo from './images/Echoes.jpg';
const isNative = Platform.OS !== 'web';

class App extends Component {
  constructor(props) {

    super(props);
    // selectedIndex==-1 mean don't have any selected Item
    // focusedIndex=0 mean first item is focused
    this.state = {
      data : [{"image":AlmaLogo,"name":"Alma"},{"image":EchoesLogo,"name":"Echoes"}],
      selectedIndex:-1,
      focusedIndex:0
    };
  }
  deSelect() {
    // remove selection
    this.setState( { selectedIndex : -1 } );
  }
  selectItem(){
    //chose focused item as a selected item
    this.setState((curState)=>{
      return{ selectedIndex:curState.focusedIndex}
    })


  }
  rightMovement(){

    if(this.state.focusedIndex<this.state.data.length-1){
      this.setState((curState)=>{
        return{ focusedIndex:curState.focusedIndex+1}
      })
      this.deSelect()
    }

  }
  leftMovement(){
    if(this.state.focusedIndex>0){
      this.setState((curState)=>{
        return{ focusedIndex:curState.focusedIndex-1}
      })
      this.deSelect()
    }
  }
  onPress(index){
    this.setState( { selectedIndex : index , focusedIndex:index } );
  }

  componentDidMount() {
    //console.log("start of componentDidMount")
    KeyEvent.onKeyDownListener(keyEvent => {
      //this section is for handling keypress in native apps

      // console.log("start of keyEvent")
     // console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
      // console.log( `Action: ${ keyEvent.action }` );
      // console.log( `Key: ${ keyEvent.pressedKey }` );
      if (keyEvent.keyCode === 67 ) {
        //Return Arrow key
        this.deSelect()
      }
      if (keyEvent.keyCode === 66 || keyEvent.keyCode === 23) {
        //Enter Arrow key
       // console.log("gggggg")
        this.selectItem()
      }
      if (keyEvent.keyCode === 22 ) {
        //Right Arrow key
        this.rightMovement()

      }
      if (keyEvent.keyCode === 21 ) {
        //Left Arrow key
        this.leftMovement()

      }

    });
    if(!isNative){
      //this section is for handling keypress in web apps
      document.addEventListener('keydown', (event)=>{
            //console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

            if(event.keyCode==39){
              //Right Arrow key
              this.rightMovement()
            }else if(event.keyCode==37){
              //Left Arrow key
              this.leftMovement()
            }else if(event.keyCode==8 || event.keyCode==10009){
              //Return Arrow key
              this.deSelect()

            }else if(event.keyCode == 13 ){
              //Enter Arrow key
              this.selectItem()

            }
          }

      )
    }
  }
  onPress(index){
    this.setState( { selectedIndex : index , focusedIndex:index } );
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
                      <Cart styles={cartStyles} isFocused={this.state.focusedIndex==index} isSelected={this.state.selectedIndex==index} onPress={()=>{this.onPress(index)}}  itemData={item} >

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
