import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetail = () => {

    //const id = useParams().id
    const {id} = useParams()

  const iplTeams2026 = [
    {
      id: 1,
      name: "Chennai Super Kings",
      shortName: "CSK",
      founded: 2008,
      captain: "Ruturaj Gaikwad",
      coach: "Stephen Fleming",
      owner: "Chennai Super Kings Cricket Ltd",
      homeGround: "M. A. Chidambaram Stadium, Chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      trophyWins: 5,
      primaryColor: "#F9CD05",
      secondaryColor: "#1D2951",
      mascot: "Lion",
      fanName: "Whistle Podu Army",
      instagramFollowers: "18M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
    },
    {
      id: 2,
      name: "Delhi Capitals",
      shortName: "DC",
      founded: 2008,
      captain: "Axar Patel",
      coach: "Hemang Badani",
      owner: "GMR Group & JSW Group",
      homeGround: "Arun Jaitley Stadium, Delhi",
      city: "Delhi",
      state: "Delhi",
      trophyWins: 0,
      primaryColor: "#17449B",
      secondaryColor: "#EF1B23",
      mascot: "Tiger",
      fanName: "DC Fans",
      instagramFollowers: "4M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/DC.png",
    },
    {
      id: 3,
      name: "Gujarat Titans",
      shortName: "GT",
      founded: 2022,
      captain: "Shubman Gill",
      coach: "Ashish Nehra",
      owner: "Torrent Group",
      homeGround: "Narendra Modi Stadium, Ahmedabad",
      city: "Ahmedabad",
      state: "Gujarat",
      trophyWins: 1,
      primaryColor: "#1C2C5B",
      secondaryColor: "#00AEEF",
      mascot: "Titan",
      fanName: "Aava De",
      instagramFollowers: "5M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/GT.png",
    },
    {
      id: 4,
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      founded: 2008,
      captain: "Ajinkya Rahane",
      coach: "Chandrakant Pandit",
      owner: "Knight Riders Group",
      homeGround: "Eden Gardens, Kolkata",
      city: "Kolkata",
      state: "West Bengal",
      trophyWins: 3,
      primaryColor: "#3A225D",
      secondaryColor: "#D4AF37",
      mascot: "Knight",
      fanName: "Korbo Lorbo Jeetbo",
      instagramFollowers: "7M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
    },
    {
      id: 5,
      name: "Lucknow Super Giants",
      shortName: "LSG",
      founded: 2022,
      captain: "Rishabh Pant",
      coach: "Justin Langer",
      owner: "RPSG Group",
      homeGround: "Ekana Cricket Stadium, Lucknow",
      city: "Lucknow",
      state: "Uttar Pradesh",
      trophyWins: 0,
      primaryColor: "#00AEEF",
      secondaryColor: "#FF6F00",
      mascot: "Eagle",
      fanName: "LSG Army",
      instagramFollowers: "4M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/LSG.png",
    },
    {
      id: 6,
      name: "Mumbai Indians",
      shortName: "MI",
      founded: 2008,
      captain: "Hardik Pandya",
      coach: "Mahela Jayawardene",
      owner: "Reliance Industries",
      homeGround: "Wankhede Stadium, Mumbai",
      city: "Mumbai",
      state: "Maharashtra",
      trophyWins: 5,
      primaryColor: "#004BA0",
      secondaryColor: "#D1AB3E",
      mascot: "Sudarshan Chakra",
      fanName: "Paltan",
      instagramFollowers: "18M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/MI.png",
    },
    {
      id: 7,
      name: "Punjab Kings",
      shortName: "PBKS",
      founded: 2008,
      captain: "Shreyas Iyer",
      coach: "Ricky Ponting",
      owner: "KPH Dream Cricket Pvt Ltd",
      homeGround: "PCA Stadium, Mullanpur",
      city: "Mohali",
      state: "Punjab",
      trophyWins: 0,
      primaryColor: "#D71920",
      secondaryColor: "#C0C0C0",
      mascot: "Lion",
      fanName: "Sher Squad",
      instagramFollowers: "4M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/PBKS.png",
    },
    {
      id: 8,
      name: "Rajasthan Royals",
      shortName: "RR",
      founded: 2008,
      captain: "Sanju Samson",
      coach: "Rahul Dravid",
      owner: "Royal Multisport Pvt Ltd",
      homeGround: "Sawai Mansingh Stadium, Jaipur",
      city: "Jaipur",
      state: "Rajasthan",
      trophyWins: 1,
      primaryColor: "#EA1A85",
      secondaryColor: "#004C93",
      mascot: "Royal Lion",
      fanName: "Halla Bol",
      instagramFollowers: "5M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/RR.png",
    },
    {
      id: 9,
      name: "Royal Challengers Bengaluru",
      shortName: "RCB",
      founded: 2008,
      captain: "Rajat Patidar",
      coach: "Andy Flower",
      owner: "United Spirits",
      homeGround: "M. Chinnaswamy Stadium, Bengaluru",
      city: "Bengaluru",
      state: "Karnataka",
      trophyWins: 1,
      primaryColor: "#EC1C24",
      secondaryColor: "#000000",
      mascot: "Royal Challenger",
      fanName: "12th Man Army",
      instagramFollowers: "22M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/RCB.png",
    },
    {
      id: 10,
      name: "Sunrisers Hyderabad",
      shortName: "SRH",
      founded: 2013,
      captain: "Pat Cummins",
      coach: "Daniel Vettori",
      owner: "Sun TV Network",
      homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      trophyWins: 1,
      primaryColor: "#F26522",
      secondaryColor: "#000000",
      mascot: "Eagle",
      fanName: "Orange Army",
      instagramFollowers: "6M+",
      squadSize: 25,
      thumbnail: "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
    },
  ];

  //array id compare --> id match -->object variable.. detail
  //array compare --.loop --> for
  // find --> match first onject -- {}
  const foundTeam = iplTeams2026.find((team)=>team.id == id)
  console.log(foundTeam)

 return (
  <div className="container mt-5">
    <div
      className="card shadow-lg border-0"
      style={{
        backgroundColor: `${foundTeam.primaryColor}20`,
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: foundTeam.primaryColor,
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={foundTeam.thumbnail}
          alt={foundTeam.name}
          style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
          }}
        />
        <h1 className="mt-3">{foundTeam.name}</h1>
        <h4>{foundTeam.shortName}</h4>
      </div>

      <div className="card-body">
        <div className="row g-3">

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>Captain</h5>
                <p>{foundTeam.captain}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>Coach</h5>
                <p>{foundTeam.coach}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5>Trophies</h5>
                <p>{foundTeam.trophyWins} 🏆</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5>Home Ground</h5>
                <p>{foundTeam.homeGround}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5>Owner</h5>
                <p>{foundTeam.owner}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>Founded</h6>
                <p>{foundTeam.founded}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>City</h6>
                <p>{foundTeam.city}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>Fan Base</h6>
                <p>{foundTeam.fanName}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>Followers</h6>
                <p>{foundTeam.instagramFollowers}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);
};
