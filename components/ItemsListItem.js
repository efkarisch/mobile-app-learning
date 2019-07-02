import React from 'react'
import styled from 'styled-components'
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native'
//import IconIon from '../components/Icon'
import { Icon } from 'react-native-elements'


const itemsListItem = props => (
  <TouchableOpacity key={props.item.key} onPress={(e)=>props.handlePress(props.item.key)}>
    <ListView>
      <ListImage resizeMode="contain" source={props.item.image}/>
      <Text>
        {props.item.value}
      </Text>
      <Icon
        name="ios-pin"
        type="ionicon"
        color="#00aced"
        />
    </ListView>
  </TouchableOpacity>
)

export default itemsListItem;


const ListImage = styled.Image`
margin-right:8px;
height:30px;
width:60px;
border-radius:3px;
justify-content: flex-end;
`

const ListView = styled.View`
width: 100%;
padding: 10px;
margin-top: 10px;
background-color:#eee;
align-items:center;
justify-content:space-between;
flex-direction:row;
`
