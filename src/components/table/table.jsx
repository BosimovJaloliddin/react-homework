import React from "react";
import "./table.css"
import {studentInfo} from "./mock"

class Table extends React.Component{
    constructor(){
        super()
        this.state={
            data: studentInfo,
            id:"",
            name:"",
            age:"",
            address:"",
            status:"",
            nickname:"",
            univ:"",
            job:"",
            active: null,
        }
    }
    render(){
        const onChange = ({target:{value, name}}) =>{
            this.setState({[name]:value})
        }
        const onEdit = ({id,name,age,address,status,nickname,univ,job},isSave) =>{
            if(isSave){
                let res =this.state.data.map(v=> v.id === id ? {
                    ...v,
                     name:this.state.name,
                     age:this.state.age, 
                     address:this.state.address,
                     status:this.state.status,
                     nickname:this.state.nickname,
                     univ:this.state.univ,
                     job:this.state.job,
                } : v)
                this.setState({active: null, data: res})
            }else{
                this.setState({
                    id,
                    name,
                    age,
                    address,
                    status,
                    nickname,
                    univ,
                    job,
                    active: {id,name,age,address,status,nickname,univ,job},
                })
            }
        }
        const onCencel = () => {
            this.setState({active: null})
        }
        return(
            <div className="container-table">
                <table>
                    <thead>
                        <tr>
                            <th className="table-id_head table-scroll">
                                ID
                            </th>
                            <th>
                                NAME
                            </th>
                            <th>
                                AGE
                            </th>
                            <th>
                                ADDRESS
                            </th>
                            <th>
                                STATUS
                            </th>
                            <th>
                                NICKNAME
                            </th>
                            <th>
                                UNIV
                            </th>
                            <th>
                                JOB
                            </th>
                            <th className="table-edit_head table-scroll">
                                EDIT
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(({id,name,age,address,status,nickname,univ,job})=>{
                                return( <tr >
                                            <td className="table-id table-scroll">{id}</td>
                                            <td>
                                                {this.state.active?.id === id 
                                                ? <input className="table-input" name="name" onChange={onChange} value={this.state.name}/> 
                                                : name}
                                            </td>
                                            <td>
                                                {this.state.active?.id === id 
                                                ? <input className="table-input" name="age" onChange={onChange} value={this.state.age}/> 
                                                : age}
                                            </td>
                                            <td >
                                                {this.state.active?.id === id 
                                                ? <input className="table-input" name="address" onChange={onChange} value={this.state.address}/> 
                                                : address}
                                            </td>
                                            <td >
                                                {this.state.active?.id === id 
                                                ? <input className="table-input" name="status" onChange={onChange} value={this.state.status}/> 
                                                : status}
                                            </td>
                                            <td>
                                                {this.state.active?.id === id 
                                                ? <input className="table-input" name="nickname" onChange={onChange} value={this.state.nickname}/> 
                                                : nickname}
                                            </td>
                                            <td>
                                                {this.state.active?.id === id 
                                                ? <input className="table-input" name="univ" onChange={onChange} value={this.state.univ}/> 
                                                : univ}
                                            </td>
                                            <td>
                                                {this.state.active?.id === id 
                                                ? <input className="table-input" name="job" onChange={onChange} value={this.state.job}/> 
                                                : job}
                                            </td>
                                            <td className="table-edit">
                                                <div onClick={()=>onEdit({id,name,age,address,status,nickname,univ,job},this.state.active?.id === id)} className="table-edit table-scroll">
                                                    {this.state.active?.id === id
                                                        ? <button className="table-edit_button">save</button>
                                                        : <button className="table-edit_button">edit</button>
                                                    }
                                                </div>
                                                {this.state.active?.id === id ? <button onClick={onCencel} className="table-edit_button">cencel</button> : null}
                                            </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table