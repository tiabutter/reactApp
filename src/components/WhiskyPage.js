import React , {Component} from 'react';
import {View,Image,ScrollView} from 'react-native';
import { Container, Header, Title, Card, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon ,Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

class WhiskyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
        }
    }
    render(){
        let {user} = this.props;
        return(
            <Container>
                <HeaderPage name={user}/>
                <ScrollView style={{flex:1}}>
                    <Content>
                    <View style={{alignSelf:'stretch',height:10,backgroundColor:'#fed555'}}></View>
                    <Image source={require("../img/banner-wisky.jpg")}
                            style={{width:null,height:248,marginTop:5}}/>
                    </Content>
                    <View style={{flex:1,flexDirection:'column',alignSelf:'stretch',backgroundColor:'#e8e8e8'}}>
                        <View style={{backgroundColor:'#fed555',height:30,width:null,marginTop:10}}>
                            <Text style={{marginTop:3,marginLeft:20}}>WHISKY</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Card>
                                <CardItem header>
                                    <Text>Jack Honey Whisky</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text style={{fontSize:12,alignSelf:'center',marginTop:-20}}>
                                            Tennessy Whisky
                                        </Text>
                                        <Text style={{fontSize:12,alignSelf:'center'}}>
                                            Amerco - 700 ml - 35x
                                        </Text>
                                        <Text style={{fontSize:12,alignSelf:'center'}}>
                                            Price 1290 ฿
                                        </Text>
                                        <Image source={require("../img/whisky1.jpg")}
                                               style={{resizeMode:'contain',width:100,marginTop:-50,alignSelf:'center'}}/>
                                        <Button warning full style={{marginTop:-60}}><Text> Add to Cart </Text></Button>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem header>
                                    <Text>Glen Moray Classic</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text style={{fontSize:12,alignSelf:'center',marginTop:-20}}>
                                            Single Molt Whisky
                                        </Text>
                                        <Text style={{fontSize:12,alignSelf:'center'}}>
                                            Scotland - 700 ml - 40x
                                        </Text>
                                        <Text style={{fontSize:12,alignSelf:'center'}}>
                                            Price 894 ฿
                                        </Text>
                                        <Image source={require("../img/whisky2.jpg")}
                                               style={{resizeMode:'contain',width:100,marginTop:-50,alignSelf:'center'}}/>
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
export default WhiskyPage;