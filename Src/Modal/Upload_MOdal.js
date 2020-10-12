import React, { Component, useState } from "react";
import { DataTable} from 'react-native-paper';
import { Ionicons ,AntDesign ,Fontisto} from "@expo/vector-icons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView
} from "react-native";
import SizePicker from '../Component/SizePicker'
import CheckBox from '../Component/CheckBox'
import ImagePIcker from '../Component/PickImage'
import Input from '../Component/TextInput'
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { getCameraRollPermissionsAsync } from "expo-image-picker";
import { TouchableOpacity } from "react-native";
const keys=[]
const App = (props) => {
   
  const [color, iscolor] = useState(['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6' ]);

    const [color2, iscolor2] = useState(['#E6B333','#3366E6', '#999966', '#99FF99', '#B34D4D']);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [start, isstart] = useState(true);
  const [description, isdescription] = useState('');
  const [price, isprice] = useState('');
  const [size, issize] = useState('');
  const [Status, isStatus] = useState('unchecked');
  const [selected, isselected] = useState(false);
  const [submit, issubmit] = useState(false);
  
  const setdescription=(val)=>{
    isdescription(val)
  }
  const CheckSelect=()=>{
       if(Status==="unchecked")
       {
        isStatus('checked')
       }
       else{
        isStatus('unchecked')
       }
  }
 
  const setprice=(val)=>{
    isprice(val)
  }
  const getSize=(val)=>{
    issize(val)
  }
  const getcolor=(val,key)=>{
    if(selected===false)
    {
      
      isselected(true)
    }
  else {
    // keys=keys.filter(item=>item!=val)
      isselected(false)
    }
   
    keys.push(val)
    console.log("Show me my selected Colors",val ,"Key",keys)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {start===true?
              <DataTable>
            
              <Input 
               value={description}
           CustomStyle={{height:50,
            width:Platform.OS==='ios'?300:350,
          alignSelf:'center',
         
           borderBottomColor:'#03a9f4',
            marginVertical:15,
             borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}
             getval={setdescription}
             mode="always"
              data="Description" name="info" type="Entypo" />
              <Input 
                value={price}
                mode="always"
                getval={setprice}
           CustomStyle={{height:50,
            width:Platform.OS==='ios'?300:350,
          alignSelf:'center',
           borderBottomColor:'#03a9f4',
            marginVertical:15,
             borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}} data="Price " name="dollar-sign" type="Feather" />
            <Text style={{color:'gray'}}>Available Size:</Text>
            <SizePicker 
             value={size}
             onValueChange={getSize}
            />
            <Text style={{color:'gray',marginTop:40}}>Available Colors:</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15}}>
            {
              color.map((val,key)=>(
               
            <TouchableOpacity 
           onPress={()=>getcolor(val,key)}
            key={key} 
            
           style={{ borderWidth:selected===true&&keys.includes(val)?3:1,marginRight:10,height:35,
            borderRadius:17,borderColor:'red',width:35,backgroundColor:val}}>
            
             </TouchableOpacity>
            
              ))
            }
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
            {
              color2.map((val,key)=>(
               
            <TouchableOpacity
            onPress={()=>getcolor(val,key)}
            key={key} style={{borderWidth:selected===true&&keys.includes(val)?3:1,marginRight:10,borderRadius:17,
            borderColor:'red',height:35,width:35,backgroundColor:val}}>
            
             </TouchableOpacity>
            
              ))
            }
             </View>
           
            
             
            
           
            <View style={{flexDirection:'row',marginTop:30}}>
        <View style={{borderColor:'gray',borderWidth:1,marginRight:10,height:35,borderRadius:15}}>
        <CheckBox
        value="hotoffer"  
        Status={Status}
        Selected={CheckSelect}
        />
        </View>
        <Text style={{color:'gray',fontSize:16,marginTop:12}}>Hot Offer </Text>
        
       
        </View>
               
            
       
       
      
    
            </DataTable>: <View>
           <ImagePIcker/>
           <ImagePIcker/>
        
        </View>}
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight
             style={{ marginVertical:10,marginHorizontal:12  }}
              onPress={() => {
                            if(start===true)
                            {
                              console.log('Description:',description ,"Price:",price,"Size:",size,"Available Colors",keys,"HOt Offers:",Status)
                            
                              isstart(false)
                             
                            }
                            else{
                              isstart(true)
                            
                            }
              }}
            >
              <Text style={{color:"#03a9f4"}}>{start===true?"Next":"Back"}</Text>
            </TouchableHighlight>
            {start===false?
             <TouchableHighlight
             style={{ marginVertical:10 ,marginHorizontal:12 }}
              onPress={() => {
                            if(submit===true)
                            {
                              isstart(false)
                              issubmit(false)
                            }
                            else{
                              issubmit(true)
                            }
              }}
            >
              <Text style={{color:"#03a9f4"}}>Submit</Text>
            </TouchableHighlight>:null}
           
        </View>
        
            <TouchableHighlight
              style={{ marginTop:10  }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}><AntDesign name="closecircle"  color="#03a9f4" size={28} /></Text>
            </TouchableHighlight>
        </View>
       
          </View>
      
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
         
         <Ionicons name="md-add-circle" color="#0faf9a" size={58} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  //  marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    //backgroundColor: "#F194FF",
    //borderRadius: 20,
   
    elevation: 2
  },
  textStyle: {
    color:"gray",
    marginLeft:2
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
