import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, InputGroup, Input, Item, Button, Left, Right, Body, Icon ,Text ,Card, CardItem } from 'native-base';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FooterPage from './FooterPage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin () {
      if(this.state.username == 'admin' && this.state.password == '1234'){
          Actions.contentFeed({user:this.state.username});
      }else{
          Alert.alert(
            'Wrong Username Or Password',
            'Please Try Again',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
      }
  }
  render() {
    let {username,password} = this.state;
    return (
       <Container>
            <Header style={{backgroundColor: 'white' ,height:90}}>
                <Left>
                    
                </Left>
                <Body>
                    <Image source={require("../img/kingmanlogo.png")}
                           style={{width: 120, height: 80,marginLeft:40}}/>
                </Body>
                <Right />
            </Header>
            <Content>
                <Container style={{backgroundColor: '#fed555',alignItems: 'center',justifyContent: 'space-between',}}>
                    <View style={{width:300, 
                                  height:350,
                                  backgroundColor:'white',
                                  marginTop:100,
                                  
                                  }}>
                          <Text style={{alignSelf:'center',marginTop:20}}>
                              SIGN IN TO YOUR ACCOUNT
                          </Text>
                          <View style={{padding:20}}>
                            <Text style={{marginTop:20,fontSize:14,marginBottom:8}}>
                                Username / Email Address 
                            </Text>
                            <Item regular>
                                <Input placeholder='Please Enter Username Here !' 
                                       style={{height: 40,
                                               width:250,
                                               fontSize:12,
                                               borderColor:'#242424'}}
                                       onChangeText={(username) => this.setState({username})} />
                            </Item>
                            <Text style={{marginTop:20,fontSize:14,marginBottom:7}}>
                                Password
                            </Text>
                            <Item regular>
                                <Input placeholder='Please Enter Password Here !' 
                                       style={{height: 40,
                                               width:250,
                                               fontSize:12,
                                      }}
                                      secureTextEntry={true}
                                      onChangeText={(password) => this.setState({password})}/>
                            </Item>
                          </View>
                          <Button dark style={{alignSelf:'center',marginTop:8}} onPress={this.handleLogin}>
                            <Text> SIGN IN </Text>
                          </Button>
                    </View>
                </Container>
            </Content>
            <FooterPage />
        </Container>
    );
  }
}
export default Login;