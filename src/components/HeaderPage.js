import React , {Component} from 'react';
import {View , Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon ,Text} from 'native-base';

class HeaderPage extends Component {
    render(){
        let {name} = this.props;
        return(
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
                    <Text>{name}</Text> 
                </Right>
            </Header>
        );
    }
}
export default HeaderPage;