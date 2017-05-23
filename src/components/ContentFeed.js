import React , {Component} from 'react';
import {View,Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon ,Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

class ContentFeed extends Component {
    render(){
        let {user} = this.props;
        return(
            <Container>
                <HeaderPage name={user}/>
                <Content>
                   <View style={{alignSelf:'stretch',height:10,backgroundColor:'#fed555'}}></View>
                   <Image source={require("../img/banner2.jpg")}
                           style={{width:null,height:300}}/>
                    <View style={{alignSelf:'stretch',height:10,backgroundColor:'#fed555'}}></View>
                    <View style={{padding:20}}>
                        <Button onPress={()=>Actions.whisky({user:user})} full style={{backgroundColor:'#fed555',marginBottom:12}}>
                            <Text style={{color:'#242424'}}>WHISKY</Text>
                        </Button>
                        <Button onPress={()=>Actions.beer({user:user})} full style={{backgroundColor:'#fed555',marginBottom:12}}>
                            <Text style={{color:'#242424'}}>BEER</Text>
                        </Button>
                        <Button onPress={()=>Actions.wine({user:user})} full style={{backgroundColor:'#fed555',marginBottom:12}}>
                            <Text style={{color:'#242424'}}>WINE</Text>
                        </Button>
                    </View>
                </Content>
                <FooterPage />
            </Container>
        );
    }
}
export default ContentFeed;