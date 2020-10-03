import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign ,Fontisto,Entypo} from '@expo/vector-icons'; 
import { StyleSheet, View, Text ,TouchableOpacity} from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props) => (
  <Card>
    <Card.Title title={props.title} subtitle={props.subtitle} left={LeftContent} titleStyle={props.titlestyle} />
    <Card.Content>
{/* <Title style={{fontSize:12}}>{props.title}</Title> */}
<Paragraph style={props.paragraph}>{props.content}</Paragraph>
    </Card.Content>
    <TouchableOpacity>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </TouchableOpacity>
   
    <Card.Actions>
    <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{alert("add to wish list")}}>  
            <Entypo name="heart" size={26}  color='#03a9f4'  /> 
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:10}} onPress={()=>{alert("Added to cart successfully")}}>  
            <AntDesign name="shoppingcart" size={26}  color='#03a9f4'  /> 
        </TouchableOpacity> 
   
        {/* <TouchableOpacity style={{marginHorizontal:30}} onPress={()=>{alert("View Complete Detail")}}>  
            <Entypo name="price-tag" size={26}  color='#03a9f4'  /> 
        </TouchableOpacity>  */}
       
        
    </Card.Actions>
  </Card>
);

export default MyComponent;