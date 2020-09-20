import  React,{Component} from 'react';
import { Text, View ,TouchableOpacity,Alert} from 'react-native';
import { DrawerActions } from '@react-navigation/routers';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Actions } from 'react-native-router-flux';
import NavBar from '../Components/BottomNavTab';

export default class StudentHome extends Component {

  render()
  {
      return (
            <React.Fragment >
              
            
                  
             
             
         <NavBar/>   
         </React.Fragment>
          ); 
    }
   
         
      
      
 
 
}
