import React, { Component } from 'react'
import "./InputForm.css"
import axios from 'axios'

export default class InputForm extends Component {
state = {
    maSV:"",
    fullName:"",
    phoneNum:"",
    email:"",
}
    handleChange  = (event)=>{
        const {name, value} = event.target;
this.setState({[name]: value})
    }

    handleSubmit = async (event)=> {
        event.preventDefault();
        try {
            await axios({
                method: "POST",
                url:"https://63d53374c52305feff70017a.mockapi.io/1",
                data: this.state,
            })
            this.props.fetchStudents()
            return
        } catch (err) {
            
        }
    }
  render() {
    return (
      <div className='info-body'>
        <div className='info-header headers'>
            <h3>Thông tin sinh viên</h3>
        </div>
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Mã SV</label>
    <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.maSV} name='maSV' onChange={this.handleChange}/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Họ và Tên</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.fullName} name='fullName' onChange={this.handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Số điện thoại</label>
    <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.phoneNum} name='phoneNum' onChange={this.handleChange}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.email}name='email' onChange={this.handleChange}/>
  </div>
  
  <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
</form>

      </div>
    )
  }
}
