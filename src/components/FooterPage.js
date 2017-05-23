import React , {Component} from 'react';
import {View , Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon ,Text} from 'native-base';

class FooterPage extends Component {
    render(){
        return(
        <Footer>
            <FooterTab>
                <Button full style={{backgroundColor:'#242424'}}>
                    <Image source={require("../img/logo1.png")}
                        style={{width: 120, height: 20}}/>
                </Button>
            </FooterTab>
        </Footer>
        );
    }
}
export default FooterPage;