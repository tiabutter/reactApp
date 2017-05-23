import React , {Component} from 'react';
import {View,Image,ScrollView} from 'react-native';
import { Container,Drawer , Header, Title, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon ,Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';
import Login from './Login';

class WinePage extends Component {
    render(){
        return(
            <Container>
                <Header style={{backgroundColor: 'white' ,height:90}}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' style={{color:'#fed555'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Image source={require("../img/kingmanlogo.png")}
                                style={{width: 120, height: 80,marginLeft:40}}/>
                    </Body>
                    <Right>
                        <Text>{user}</Text> 
                    </Right>
                </Header>
                <ScrollView style={{flex:1}}>
                <Content>
                   <View style={{alignSelf:'stretch',height:10,backgroundColor:'#fed555'}}></View>
                   <Image source={require("../img/banner-wine.jpg")}
                           style={{flex: 1,width:null,height:300}}/>
                </Content>
                <View style={{flex:1,flexDirection:'column',alignSelf:'stretch',backgroundColor:'#e8e8e8'}}>
                        <View style={{backgroundColor:'#fed555',height:30,width:null,marginTop:10}}>
                            <Text style={{marginTop:3,marginLeft:20}}>WINE</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Card>
                                <CardItem header style={{alignSelf:'center'}}>
                                    <Text>Oakwood Red</Text>
                                </CardItem>
                                <CardItem>
                                    <Body style={{alignItems:'center'}}>
                                        <Text style={{fontSize:12,marginTop:-20}}>
                                            Americo - 750 ml
                                        </Text>
                                        <Text style={{fontSize:12}}>
                                            Price 450 ฿
                                        </Text>
                                        <Image source={require("../img/wine1.jpg")}
                                               style={{resizeMode:'contain',width:100,marginTop:-50}}/>
                                        <Button warning full style={{marginTop:-60}}><Text> Add to Cart </Text></Button>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem header style={{alignSelf:'center'}}>
                                    <Text>Ave De Preso Red</Text>
                                </CardItem>
                                <CardItem>
                                    <Body style={{alignItems:'center'}}>
                                        <Text style={{fontSize:12,marginTop:-20}}>
                                            Spain - 750 marginLeft
                                        </Text>
                                        <Text style={{fontSize:12}}>
                                            Price 540 ฿
                                        </Text>
                                        <Image source={require("../img/wine2.jpg")}
                                               style={{resizeMode:'contain',width:100,marginTop:-50}}/>
                                        <Button warning full style={{marginTop:-60}}><Text> Add to Cart </Text></Button>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                </ScrollView>
                <FooterPage />
            </Container>
        );
    }
}
export default WinePage;