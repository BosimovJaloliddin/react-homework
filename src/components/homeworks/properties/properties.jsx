import React  from "react";
import House from "./houses/houses";
import "./properties.css"


let houseInfo=[
    {id:1,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:2,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:3,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:4,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:4,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:5,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:6,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:7,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:8,name:"New Apartment Nice Wiew" ,urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
]

class Properties extends React.Component{
    render(){
        return(
            <div className="wrapper-houses">
                {houseInfo.map(v=><House houseInfo={v}/>)}
             </div>
        )
    }
}
export default Properties