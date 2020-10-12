import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ReusableButton from '../Component/ReusableButton';
export default class Cart extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectAll: false,
			cartItemsIsLoading: false,
			cartItems: [
                /* Sample data from walmart */
                {itemId: "247714372", name: "Gochi Decent Ladies Bags Collection ",thumbnailImage:"https://assetscdn1.paytm.com/images/catalog/product/B/BA/BAGDANIEL-CLARKTHE-815130FA6D9D66/0..jpg", qty: 1, color: "Skin", salePrice: "2600", checked: 1},
				{itemId: "501436323", name: "Diamond Ring With Gold Combination", thumbnailImage: "https://images.unsplash.com/photo-1518953789413-9598f0909795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", color: "Red", qty: 1, salePrice: "1500", checked: 1},
				{itemId: "35031861", name: "Armani Stainless Steel Earing", thumbnailImage: "https://media-asia-cdn.oriflame.com/-/media/images/externalImage.ashx?externalMediaId=product-management-media%2F29579%2F29579.png%3Fversion%3D1594228097&q=90", qty: 1, color: "Golden", salePrice: "3000", checked: 0},
                {itemId: "801099131", name: "Gochi Decent Ladies Bags Collection", thumbnailImage: "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/17895/161713/KNY-KAVIN-New-Women-Bags-Set-3-Pcs-Leather-Handbag-Casual-Shopping-Bags-Ladies-Brand-Designer__18494.1545043391.jpg?c=2", qty: 1, color: "Golden", salePrice: "2700", checked: 1},
                
				{itemId: "42608079", name: "VisCose Kurties Collection in linen", thumbnailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPXWiexBBrQZHbJUwALu1pDbsCeWg3OeB9mQ&usqp=CAU", color: "Skin", qty: 1, salePrice: "129.99", checked: 0},
                {itemId: "247714372", name: "EdenRobe Kurties Collection in Cotton", thumbnailImage: "https://textiledeal.b-cdn.net/uploads/RANGJYOT-ISHITA-VOL-4-LONG-LADIES-KURTIS-COLLECTION-AT-BEST-RATES-ONLINE.jpg", qty: 1, color: "red", salePrice: "4200", checked: 1}
			]
		}
	}
	
	selectHandler = (index, value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value 
		this.setState({ cartItems: newItems }); // set new state
	}
	
	selectHandlerAll = (value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems.map((item, index) => {
			newItems[index]['checked'] = value == true ? 0 : 1; // set the new value 
		});
		this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); // set new state
	}
	
	deleteHandler = (index) => {
		Alert.alert(
			'Are you sure you want to delete this item from your WishList?',
			'',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Delete', onPress: () => {
					let updatedCart = this.state.cartItems; 
					updatedCart.splice(index, 1); 
					this.setState(updatedCart); 
				}},
			],
			{ cancelable: false }
		);
	}

    addtoCart = (index) => {
		Alert.alert(
			'Are you sure you want to add Item into Cart?',
			'',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Add to Cart', onPress: () => {
				
				}},
			],
			{ cancelable: false }
		);
	}

	
	quantityHandler = (action, index) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		
		let currentQty = newItems[index]['qty'];
		
		if(action == 'more'){
			newItems[index]['qty'] = currentQty + 1;
		} else if(action == 'less'){
			newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
		}
		
		this.setState({ cartItems: newItems }); // set new state
	}
	
	subtotalPrice = () => {
		const { cartItems } = this.state;
		if(cartItems){
			return cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.qty * item.salePrice : 0), 0 );
		}
		return 0;
	}
	
	
	
	render() {
		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
		});
		
		const { cartItems, cartItemsIsLoading, selectAll } = this.state;
		
		return (
			<View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
				<View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10}}>
					
				</View>
				
				
				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, {height: 300}]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
                    <ScrollView 
                     showsVerticalScrollIndicator={false}>	
						{cartItems && cartItems.map((item, i) => (
							<View key={i} style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120}}>
							
								<View style={{flexDirection: 'row',marginHorizontal:20, flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
									<TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/}} style={{paddingRight: 10}}>
										<Image source={{uri: item.thumbnailImage}} style={[styles.centerElement, {height: 60, width: 60, backgroundColor: '#eeeeee'}]} />
									</TouchableOpacity>
									<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
										<Text numberOfLines={1} style={{fontSize: 15}}>{item.name}</Text>
										<Text numberOfLines={1} style={{color: '#8f8f8f'}}>{item.color ? 'Variation: ' + item.color : ''}</Text>
                    <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>${item.qty * item.salePrice}</Text>
										
									</View>
									
								</View>
								<View style={[styles.centerElement, {width: 60,flexDirection:'row',marginRight:10}]}>
								
                                    <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32,marginHorizontal:3}]} onPress={() => this.deleteHandler(i)}>
										<Ionicons name="md-trash" size={25} color="#ee4d2d" />
									</TouchableOpacity>
								</View>
							</View>
						))}
					</ScrollView>
				)}
				
				{!cartItemsIsLoading &&
					<View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5}}>
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								
							</View>
							
						</View>
						<View style={{flexDirection: 'row'}}>
							
						</View>
						
					</View>
				}
			</View>
		);
	}
}