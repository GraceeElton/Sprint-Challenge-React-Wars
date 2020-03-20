import React, {useState, useEffect} from "react";
import axios from "axios";
import CardInfo from "../components/CardInfo";

export default function CardWars (){
    const [newCard, setCard] = useState([]);
    console.log("NEW CARDS", newCard);

    useEffect (() => {
        axios.get("https://swapi.co/api/people/")
        .then(response =>{
            console.log(response);
            setCard(response.data.results);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        });

    },[]);

        return(
            <div className = "wrapper">
                {newCard.map ((item, index)=>{
                    return (
                    <CardInfo
                        key = {index}
                        name = {item.name}
                        eye_color = {item.eye_color}
                        birth_year ={item.birth_year}
                        gender ={item.gender}
                        />
                    )
                })}
                
            </div>

        );

}