import React from "react"
import "./houses.css"

class House extends React.Component{
    render(){
        let {id,name ,urlImage ,location,bed,bath,garage,sq,beforSalary,newSalary}=this.props.houseInfo
        return <>
            <div className="house">
                <div className="house-image">
                    <img src={urlImage} alt="house" />
                    <a href="h" className="featured house-image_icons">featured</a>
                    <a href="h" className="for-sale house-image_icons">for sale</a>
                </div>
                <div className="house-info">
                    <div className="house-title">
                        <h3 className="house-name">{name}</h3>
                        <p className="house-location">{location}</p>
                    </div>
                    <div className="house-info_items">
                        <div className="house-info_item">
                            <a href="h"><i class="fa-solid fa-bed"></i></a>
                            <span>{bed}</span>
                        </div>
                        <div className="house-info_item">
                            <a href="h"><i class="fa-solid fa-bath"></i></a>
                            <span>{bath}</span>
                        </div>
                        <div className="house-info_item">
                            <a href="h"><i class="fa-solid fa-warehouse"></i></a>
                            <span>{garage}</span>
                        </div>
                        <div className="house-info_item">
                            <a href="h"><i class="fa-solid fa-ruler"></i></a>
                            <span>{sq}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="house-salary_info">
                        <div className="house-salary">
                            <a  href="h" className="befor-salary">{beforSalary}</a>
                            <a  href="h" className="new-salary">{newSalary}</a>
                         </div>
                         <div className="house-likes">
                            <a href="h"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></a>
                            <a href="h"><i class="fa-regular fa-heart"></i></a>
                         </div>
                    </div>
                </div>
            </div>
        </>
    }
}
export default House