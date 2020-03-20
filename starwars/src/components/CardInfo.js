import React from 'react';
import styled from "styled-components";
import {Badge, CardTitle} from 'reactstrap';

const CardStars = styled.div`
  background: tan;
  color: black;
  max-width: 400px;
  min-height: 400px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  h1:25px;
`;

const Title = styled.h1 `
    fontSize:25px;
    background:lightBlue;
    color:white;
    max-heigth: 20px;
`



const cardInfo = props => {
    console.log("this is PROPS", props);
    return (
        <CardStars>
           
                <Title>Name: {props.name}</Title>
                <Badge color = "info">Eye Color: {props.eye_color}</Badge>
                <Badge color = "info">Birth Year: {props.birth_year}</Badge>
                <Badge color = "info">Gender: {props.gender}</Badge>
           
        </CardStars>
    );
};


export default cardInfo;

