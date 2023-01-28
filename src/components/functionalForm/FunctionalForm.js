import React, { Component } from "react";
import "./FunctionalForm.css";
import { connect } from "react-redux";

class FunctionalForm extends Component {
  render() {
    const { studentList, dispatch } = this.props;
    return (
      <div className="func-body">
        <table>
          <thead className="headers func-header">
            <tr>
              <th className="headers func-header">Mã SV</th>
              <th className="headers func-header">Họ và Tên</th>
              <th className="headers func-header">Số điện thoại</th>
              <th className="headers func-header">Email</th>
              <th className="headers func-header">Tuỳ chọn</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((item) =>
                    <tr> 
                        <td>{item.maSV}</td>
                        <td>{item.fullName}</td>
                        <td>{item.phoneNum}</td>
                        <td>{item.email}</td>
                        <td><button className="btn btn-warning">Điều chỉnh</button>
                        <button className="btn btn-danger">Xoá</button></td>
                    </tr>
            
)
    //           <tr>
    //             <td>{studentList.maSV}</td>
    // <td>{studentList.fullName}</td>
    // <td>{studentList.phoneNum}</td>
    // <td>{studentList.email}</td>
    //             <td></td>
    //           </tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  studentList: state.studentReducer.studentList,
});

export default connect(mapStateToProps)(FunctionalForm);
