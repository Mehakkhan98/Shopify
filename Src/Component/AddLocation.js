import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native';
import ReusableText from '../Component/TouchableText'
import ReusableInput from '../Component/TextInput';
import { Ionicons ,AntDesign ,Fontisto} from "@expo/vector-icons";
const locarray=[]
export default function App() {
    const [click, isclick] = React.useState(false);
    const [location, islocation] = React.useState('');
    const [Checked,isChecked]=React.useState(false)
    const [Selected,isSelected]=React.useState('')
    const [loc, isloc] = React.useState([]);
    const add=()=>{
      // locarray.push(location)
      isloc(loc.concat(location))
      islocation("")

    }
    const setlocation=(e)=>{
        islocation(e)
    }
    const SelectOneLoc=(e)=>{
      isSelected(e)
    if(Checked===true)
    {
      isChecked(false)
    }
    else{
      isChecked(true)
    }
  }
    const Removelocaion=(e)=>{
    
       const filtered=(loc.filter(item => item !== e))
       
       isloc(filtered)
  }
    const addlocation=()=>{
      
      if(click===true)
      {
          isclick(false)
      }
      else{
        isclick(true)
      }
    }
  return (
 
  <View>
      {click===true?
      <View style={{flexDirection:'row'}}>
     <ReusableInput
     type="text"
     mode="never"
     value={location}
     getval={setlocation}
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?310:400,
     borderBottomColor:'#0faf9a',
      marginVertical:15,
     
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}} 
       textstyle={{marginLeft:10, color:"gray",fontSize:14, width:Platform.OS==='ios'?250:300,marginTop:10}}
       data="Add Location" name="home" type="Entypo" />
          <TouchableOpacity   onPress={add} 
          style={{marginTop:30}} >
         
         <Ionicons name="md-add-circle" color="#0faf9a" size={32} />
      </TouchableOpacity>
     
      </View>
     
 
  :null}
{click===false?
  <ReusableText
          Customstyle={{color:'#0faf9a',fontSize:18}}
          title="Add Location "
          parentstyle={{marginLeft:50}}
          Move={addlocation}
          />:null}
  
          <ScrollView   showsVerticalScrollIndicator={false}>
          { loc.slice().reverse().map((val,key)=>(
           
                   	
						
        <View  key={key}
         style={{
         backgroundColor: '#fff', marginBottom: 2, height: 80,elevation: 0,
         borderBottomWidth:0.5,shadowColor: 'gray',
         marginVertical:3,
         shadowOffset: { width: 1, height: 5 },
         shadowOpacity: 0.8,
         shadowRadius: 2,}}>
							
							<View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={()=>SelectOneLoc(val)}
              style={{width: 32, height: 32,marginTop:50}} >
                {
                  Checked===true&&Selected===val?<Ionicons name= "ios-checkmark-circle"  
                  size={25} color= "#0faf9a"  />:
                  <Ionicons name= "ios-checkmark-circle"  
             size={25} color= "gray"  />
                }
                 
									</TouchableOpacity>
              <Text style={{marginTop:50}}
                                       >{val}</Text>
               <TouchableOpacity onPress={()=>Removelocaion(val)}
                style={{position:'absolute',right:10,marginTop:50}}>
										<Ionicons name="md-trash" size={25} color="#ee4d2d" />
									</TouchableOpacity>
              </View>
           <Text 
           style={{marginVertical:10,color:'gray',alignSelf:'center'}}>
             Select One Exact Location</Text>    
								
							
								
							</View>
						
				
           
          
             
          ))
}
</ScrollView>
  </View>  
  
  );
}


