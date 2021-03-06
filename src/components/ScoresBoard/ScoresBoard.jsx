import React, { useEffect, useState } from "react";
import './ScoresBoard.css';
import axios from "axios";

export default function ScoresBoard(){
    const [scores, setScores] = useState([]);

    useEffect (()=> {
        axios.get("http://localhost:8080/score").then((resp)=>{
            console.log("Scores: ",resp.data)
            setScores(resp.data)
         
        })
    },[])
        
    
    console.log("Scores? ", scores);
    
    const renderScores = (player,index) => {
        return (
            <tr key ={index}>
                <td>{player.name}</td>
                <td>{player.score}</td>
            </tr>
        )
    }
    return (
        <div>
            <h1>Scores Board</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody id = "t01">
                    {scores.map(renderScores)}
                </tbody>

                
            </table>
        </div>
    )
}