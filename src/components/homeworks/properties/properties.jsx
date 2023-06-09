import React  from "react";
import House from "./houses/houses";
import "./properties.css"


const houseInfo=[
    {id:1,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image2.png",urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:2,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image1.png",urlImage:"image/house-image2.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:3,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image3.png",urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:4,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image1.png",urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:4,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image2.png",urlImage:"image/house-image2.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:5,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image1.png",urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:6,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image3.png",urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:7,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image1.png",urlImage:"image/house-image2.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
    {id:8,name:"New Apartment Nice Wiew" , contactImage:"image/contact-image2.png",urlImage:"image/house.png" ,location:"Quincy St, Brooklyn, NY, USA",bed:"4 Beds",bath:"5 Daths",garage:"1 Garage",sq:"1200 Sq Ft",beforSalary:"$2.800/me", newSalary:"$7.500/mo"},
]

class Properties extends React.Component{
    render(){
        return(
            <div className="wrapper-houses">
                {houseInfo.map((v,i)=><House houseInfo={v} key={i}/>)}
             </div>
        )
    }
}
export default Properties