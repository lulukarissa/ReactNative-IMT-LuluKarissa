import React, {Component} from 'react';
import {Container, Header, Button, Text, Card, CardItem, Body,
  Content, Form, Item, Label, Title, Input, Grid, Col} from 'native-base'
import {View} from 'react-native'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      massa: '',
      tinggi: '',
      result: null
    }
  }

  calculate = (massa, tinggi) => {
    var angkaimt = massa / (tinggi**2)
    var imt = angkaimt.toFixed(4) //hanya ada 4 angka di belakang koma

    if (imt < 18.5){
      var diagnosa = 'BB Kurang';
    }
    else if (imt >= 18.5 && imt <= 24.9){
      var diagnosa = 'BB Ideal';
    }
    else if (imt >=25.0 && imt <= 29.9){
      var diagnosa = 'BB Berlebih';
    }
    else if (imt >= 30.0 && imt <= 39.9){
      var diagnosa = 'BB Sangat Berlebih';
    }
    else{
      var diagnosa = 'Obesitas';
    }
    
    return {imt, diagnosa}
  }
  
  render() {
    return (
      <Container>

        <Header style={{backgroundColor: 'green'}}>
          <Title style={{margin:10}}>
            INDEX MASSA TUBUH
          </Title>
        </Header>

        <Content>
          <Form>
            <Grid>
              <Col style={{margin:15}}>
                <Item floatingLabel>
                  <Label>Massa (kg)</Label>
                  <Input
                  onChangeText={(x)=>{this.setState({massa: x})}}/>
                </Item>
              </Col>
              <Col style={{margin:15}}>
                <Item floatingLabel>
                  <Label>Tinggi (cm)</Label>
                  <Input
                  onChangeText={(x)=>{this.setState({tinggi: x/100})}}/>
                </Item>
              </Col>
            </Grid>
          </Form>

          <Button success full style={{margin:15}}
          onPress={() => {
            this.setState({
              result: this.calculate(this.state.massa, this.state.tinggi) 
            })
          }}>
            <Text>Hitung IMT</Text>
          </Button>
            
          
          {
            this.state.result ?
              <View style={{margin:10}}>
                <Grid>
                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Massa Tubuh:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.massa} kg
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Tinggi Badan:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.tinggi} m
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Indeks Massa Tubuh:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.result.imt}
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Diagnosa:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.result.diagnosa}
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                </Grid>
            </View>
            : null
          }
              
        </Content>
      </Container>
    );
  }
}