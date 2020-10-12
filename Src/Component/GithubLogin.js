import * as React from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { TouchableOpacity,Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

 


const discovery = {
  authorizationEndpoint: 'https://online-shopping-53d22.firebaseapp.com/__/auth/handler',
  tokenEndpoint: 'https://online-shopping-53d22.firebaseapp.com/__/auth/handler',
  revocationEndpoint: 'https://online-shopping-53d22.firebaseapp.com/__/auth/handler/276169cbc2a71d5f3635',
};

export default function App() {
  // const [request, response, promptAsync] = useAuthRequest(
  //   {
  //     clientId: '276169cbc2a71d5f3635',
  //     scopes: ['profile', 'email'],
      
  //     redirectUri: makeRedirectUri({
       
  //       native: 'http://localhost:19002',
  //     }),
  //   },
  //   discovery
  // );

  // React.useEffect(() => {
  //   if (response?.type === 'success') {
  //     alert("happen")
  //     const { code } = response.params;
  //     }
  //     else{
  //       alert("try again")
  //     }
  // }, [response]);

  return (
      
    <TouchableOpacity  
    //onPress={() =>  promptAsync()    }
    style={{marginHorizontal:Platform.OS==="ios"?13:20}}>
         <AntDesign name="github" size={32} color="purple" />
         </TouchableOpacity>
  );
}

  