import React, { useEffect, useState } from "react";
import './ScoresBoard.css';
import axios from "axios";

export default function ScoresBoard(){
    const [scores, setScores] = useState({});
    
    const players = axios.get("http://localhost:8080/score").then((resp)=>{
            console.log("Scores: ",resp.data)
            setScores(resp.data)
            console.log("useState: ", scores)
        })
        
    console.log("Scores: ", players.data);
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
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map(renderScores)}
            </tbody>

            
        </div>
    )
}