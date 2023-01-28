import React, { Component } from 'react'
import FunctionalForm from '../functionalForm/FunctionalForm'
import InputForm from '../inputForm/InputForm'
import "./Body.css"
import { connect } from 'react-redux'
import axios from 'axios';


class Body extends Component {
  fetchStudents= async ()=>{
    const {studentList,dispatch} = this.props;
    try {const res = await axios ({
      method:"GET",
      url:"https://63d53374c52305feff70017a.mockapi.io/1"
    })

dispatch({
  type:"FETCH_STUDENTS",
  payload: res.data,
})
console.log(studentList)
    }catch (err){
      console.log(err)
return
    }
    
  }
  componentDidMount(){
    this.fetchStudents()
  }

  render() {
    const {studentList} = this.props;
    return (
      <div className='body-body'>
        <InputForm fetchStudents={this.fetchStudents}/>
        <FunctionalForm/>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    studentList: state.studentReducer.studentList
  }
}
export default connect (mapStateToProps, null)(Body)
