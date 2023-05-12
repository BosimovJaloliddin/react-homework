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
            select:"id",
            active: null,
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
        const onEdit = ({id,name,status},isSave) =>{
            if(isSave){
                let res = this.state.data.map((value)=>value.id === id ? {...value, name :this.state.name, status:this.state.status} : value)
                this.setState({active:null, data:res})
            }else{
                this.setState({
                    name:name,
                    status:status,
                    active: {id, name, status}
                })
            }
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
                    {
                        this.state.data.length ? this.state.data.map(({id,name,status})=>{
                        return <div>
                                    <tr>
                                        <td>{id}</td>
                                        <td>
                                            {
                                                this.state.active?.id === id ? <input name="name" onChange={onChange} value={this.state.name} type="text"/> : name
                                            }
                                        </td>
                                        <td>
                                            {
                                                this.state.active?.id === id ? <input name="status" onChange={onChange} value={this.state.status} type="text"/> : status
                                            }
                                        </td>
                                    </tr>
                                    <button onClick={()=>onDelete(id)}>delet</button> 
                                    <button onClick={()=>onEdit({id, name, status}, this.state.active?.id === id)}>
                                        {this.state.active?.id === id ? "save" : "edit"}
                                    </button>
                               </div>
                        }) : <h1>No data</h1>
                    }
                </div>
            </>
        )
    }
}
export default Crud