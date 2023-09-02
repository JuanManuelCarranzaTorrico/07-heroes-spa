import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import React from "react";


export const HeroList = ({publisher}) => {
    const Heroes=getHeroesByPublisher(publisher);
  return (
    <ul>
        {Heroes.map(hero=>(
            
            <li key={hero.id}>
                {hero.superhero}
                </li>
        ))
    }
    </ul>
  )
}
