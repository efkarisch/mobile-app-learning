import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
//import IconIon from '../components/Icon'
import styled from 'styled-components'
import ItemsListItem from '../components/ItemsListItem'
import AddItem from '../components/AddItemInput'
import placeImage from '../assets/images/beautiful-place.jpg'
import PlaceDetail from '../components/PlaceDetail'

export default class HomeScreen extends Component {

  state = {
    item: '',
    items: [],
    selectedItem: null
  }

  itemChangeHandler = val => {
    this.setState({
      item:val
    })
  }

  itemAddHandler = val => {

    if(this.state.item.trim() === '') return

    this.setState( prevState => {
      return {
        items: prevState.items.concat({
          key: String(Math.random()),
          value: val,
          image: placeImage
          // image: {
          //   uri: 'https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-22-6494224267083776-s.png'
          // }
        })
      }
    })

    this.setState({item:''})
  }

  removeItem = key => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter( item => {
          return item.key !== key
        })
      }
    })
  }

  render(){

    return (

      <MainContainer>

      <Heading>A nasty chunk of text</Heading>

      <AddItem
        value={this.state.item}
        handlePress={(e) => this.itemAddHandler(this.state.item)}
        handleChange={this.itemChangeHandler}
        placeholder="Add Place"
      />
      {
        <Button
        title="log state"
        onPress={(e)=>console.log(this.state)}
        />
      }

        <ScrollView>


          {this.state.items.length > 0 &&
            <>
              <PlaceDetail
              />
              <FlatList
                data={this.state.items}
                renderItem={({item}) =>
                    <ItemsListItem
                      handlePress={this.removeItem}
                      item={item}
                      />
                  }
              />
            </>
        }

        </ScrollView>
        <InfoTabFooter>
          <Text>
            Claims | Invoicing | Reports
          </Text>
        </InfoTabFooter>

      </MainContainer>
    )
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const MainContainer = styled.View`
flex:1;
background-color:#F0F8FF;
padding:0px 15px;
padding-top:35px;
`
const Heading = styled.Text`
align-self:center;
color:rgba(0,0,0,0.4);
font-weight:bold;
font-size: 30;
`
const InfoTabFooter = styled.View`
position: absolute;
bottom: 0;
left: 0;
right: 0;
${Platform.select({
    ios:
    {
      shadowColor: 'black',
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    android: {
      elevation: 20,
    },
  })}
align-items: center;
background-color: #fbfbfb;
padding-vertical: 20;
``
