import React from "react"
import {student} from "./mock"
import "./crud.css"

class Crud extends React.Component{
    constructor(){
        super()
        this.state = {
            data : student,
            id : student.length+1,
            name : "",
            status : "",
            add: "",
        }
    }
    render(){
        const onDelete=(id)=>{
            let res = this.state.data.filter((v)=>v.id !== id)
            this.setState({data : res})
        }
        const onChange = ({target:{value,name}}) =>{
            this.setState({[name]:value})
        }
        const onAdd = () =>{
            const {id, name, status} = this.state
            let res = [...this.state.data, {id, name, status}]
            this.setState({data : res, id: id+1})
        }
        return(
            <>
                <div className="box">
                    <input  onChange={onChange} name="name" type="text" placeholder="name"/>
                    <input  onChange={onChange} name="status" type="text" placeholder="status"/>
                    <button onClick={onAdd}>Add</button>
                    {this.state.data.map(v=>{
                        return <h4>{v.id} - {v.name}  {v.status} <button onClick={()=>onDelete(v.id)}>delet</button></h4>
                    })}
                </div>
            </>
        )
    }
}
export default Crud