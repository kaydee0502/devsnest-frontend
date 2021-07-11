import React from "react";
import "./calc.css";
import Calctoast from "./CalCtoast";

const menu = [

{
    item: "borgir",
    price: 45,
    calories: 200
},
{
    item: "pitzah",
    price: 69,
    calories: 220
},
{
    item: "crossan",
    price: 38,
    calories: 160
},
{
    item: "cola",
    price: 20,
    calories: 95
}
]


function calorieDiv(){
    return (
        <div className = "page">
            <div className = "container">
                {
                    menu.map(e => (
                        <Calctoast item={e.item} price={e.price} calories={e.calories} />
                    ))
                }

            </div>
        </div>
    )

}

export default calorieDiv;