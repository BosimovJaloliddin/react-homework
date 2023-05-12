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
            select:"id"
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
            let user = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status
            }
            this.setState({
                data: [...this.state.data, user],
                name: "",
                status: "",
            })  
        }
        const onFilter = ({target:{value}}) =>{
            let res = student.filter((v)=> `${v[this.state.select]}`.toLowerCase().includes(`${value}`.toLowerCase()))
            this.setState({data : res})
        }
        const onSelect = ({target:{value}}) =>{
            this.setState({select:value})
        }
        const onSort = () =>{
            let res = this.state.data.sort((a,b)=> `${a[this.state.select]}`.localeCompare(`${b[this.state.select]}`))
            this.setState({data : res})
        }
        return(
            <>
                <div className="box">
                    <input value={this.state.name}  onChange={onChange} name="name" type="text" placeholder="name"/>
                    <input value={this.state.status}  onChange={onChange} name="status" type="text" placeholder="status"/>
                    <button onClick={onAdd}>Add</button>
                    <hr />
                    <select onChange={onSelect} name="select" id="select">
                        <option value="id">id</option>
                        <option value="name">name</option>
                        <option value="status">status</option>
                    </select>
                    <input onChange={onFilter} type="text" placeholder="filter"/>
                    <button onClick={onSort}>sort</button>
                    {this.state.data.map(v=>{
                        return <h4>{v.id} - {v.name}  {v.status} <button onClick={()=>onDelete(v.id)}>delet</button></h4>
                    })}
                </div>
            </>
        )
    }
}
export default Crud