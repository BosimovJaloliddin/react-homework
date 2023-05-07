import React from "react";

class Test extends React.Component{
    constructor(prop){
        super(prop)
        this.state={
            name:"",
            surname:"",
            age:""
        }
    }
    render(){
        // const onRadio=(e)=>{
        //     console.log(e.target.checked,e.target.id);
        // }
        const onChange=({target:{value,name}})=>{
            this.setState({[name]:value})
        }
        return<>
            {/* <label htmlFor="okey">
                <input name="radio" id={"okey1"} type="radio" onChange={onRadio} />
                <input name="radio" id={"okey2"} type="radio" onChange={onRadio} />
            </label> */}
            <h1>Name:{this.state.name}</h1>
            <h1>Surname:{this.state.surname}</h1>
            <h1>Age:{this.state.age}</h1>
            <input onChange={onChange} name="name" type="text" />
            <input onChange={onChange} name="surname" type="text" />
            <input onChange={onChange} name="age" type="text" />
        </>
    }
}
export default Test