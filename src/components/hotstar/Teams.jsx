import React from "react";
import { Link } from "react-router-dom";

export const Teams = () => {
  const iplTeams = [
  {
    id: 1,
    name: "Chennai Super Kings",
    shortName: "CSK",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/CSK.png"
  },
  {
    id: 2,
    name: "Delhi Capitals",
    shortName: "DC",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/DC.png"
  },
  {
    id: 3,
    name: "Gujarat Titans",
    shortName: "GT",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/GT.png"
  },
  {
    id: 4,
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/KKR.png"
  },
  {
    id: 5,
    name: "Lucknow Super Giants",
    shortName: "LSG",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/LSG.png"
  },
  {
    id: 6,
    name: "Mumbai Indians",
    shortName: "MI",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/MI.png"
  },
  {
    id: 7,
    name: "Punjab Kings",
    shortName: "PBKS",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/PBKS.png"
  },
  {
    id: 8,
    name: "Rajasthan Royals",
    shortName: "RR",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/RR.png"
  },
  {
    id: 9,
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/RCB.png"
  },
  {
    id: 10,
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    thumbnail: "https://scores.iplt20.com/ipl/teamlogos/SRH.png"
  }
];

  return (
    <div className="container text-center">
      <h1 className="my-4">Teams</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}
      >
        {iplTeams.map((team) => (
          <div key={team.id} className="card p-3">
            <img
              src={team.thumbnail}
              alt={team.name}
              style={{
                height: "80px",
                width: "80px",
                objectFit: "contain",
                margin: "auto",
              }}
            />
            <h5 className="mt-3">{team.name}</h5>
            <Link to={`/teamdetail/${team.id}`} className="btn btn-primary">Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
};