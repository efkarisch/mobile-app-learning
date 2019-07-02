import React from 'react'
import styled from 'styled-components'
import {TextInput, Button, View} from 'react-native'
import Icon from '../components/Icon'


const inputItem = (props) => (

<InputRow>

<Input
  onChangeText={props.handleChange}
  placeholder={props.placeholder}
  value={props.value}
  />
  <ButtonStyle>
    <Button
    title="Add"
    icon={
      <Icon
      name="ios-link"
      size={15}
      color="white"/>
    }
    onPress={props.handlePress}
    />
  </ButtonStyle>

</InputRow>
)


export default inputItem


const Input = styled.TextInput`
border-color:white;
backgroundColor:white;
color:grey;
font-weight:300;
font-size:16;
padding: 0px 10px;
height: 40;
width:80%;
box-shadow: 2px 2px 1px rgba(0,0,0,0.2);
border-radius:3px;
`

const InputRow = styled.View`
flex-direction: row;
justify-content:space-between;
align-items:center;
width:100%;
`

const ButtonStyle = styled.View`
box-shadow: 2px 2px 1px rgba(0,0,0,0.2);
border-radius:3px;
background-color:white;
`
