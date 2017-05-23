import React , {Component} from 'react';
import {View,Image,ScrollView} from 'react-native';
import { Container, Header, Title, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon ,Text} from 'native-base';

import {Actions} from 'react-native-router-flux';

import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

class BeerPage extends Component {
    render(){
        let {user} = this.props;
        return(
            <Container>
                <HeaderPage name={user}/>
                <ScrollView>
                <Content>
                   <View style={{alignSelf:'stretch',height:10,backgroundColor:'#fed555'}}></View>
                   <Image source={require("../img/banner-beer.jpg")}
                           style={{flex: 1,width:null,height:300,}}/>
                </Content>
                <View style={{flex:1,flexDirection:'column',alignSelf:'stretch',backgroundColor:'#e8e8e8'}}>
                        <View style={{backgroundColor:'#fed555',height:30,width:null,marginTop:10}}>
                            <Text style={{marginTop:3,marginLeft:20}}>BEER</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Card>
                                <CardItem header style={{alignSelf:'center'}}>
                                    <Text>Beer Lao Lager</Text>
                                </CardItem>
                                <CardItem>
                                    <Body style={{alignItems:'center'}}>
                                        <Text style={{fontSize:12,marginTop:-20}}>
                                            Pole Lager
                                        </Text>
                                        <Text style={{fontSize:12}}>
                                            Laos - 330 ml -5x
                                        </Text>
                                        <Text style={{fontSize:12}}>
                                            Price 65 ฿
                                        </Text>
                                        <Image source={require("../img/beer1.jpg")}
                                               style={{resizeMode:'contain',width:100,marginTop:-50}}/>
                                        <Button warning full style={{marginTop:-60}}><Text> Add to Cart </Text></Button>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem header  style={{alignSelf:'center'}}>
                                    <Text>Phuket Beer</Text>
                                </CardItem>
                                <CardItem>
                                    <Body style={{alignItems:'center'}}>
                                        <Text style={{fontSize:12,marginTop:-20}}>
                                            Pole Lager
                                        </Text>
                                        <Text style={{fontSize:12}}>
                                            Thailand - 330 ml -5x
                                        </Text>
                                        <Text style={{fontSize:12}}>
                                            Price 75 ฿
                                        </Text>
                                        <Image source={require("../img/beer2.jpg")}
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
export default BeerPage;