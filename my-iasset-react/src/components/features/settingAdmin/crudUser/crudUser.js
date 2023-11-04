import React from "react";
import Layout from "../../../layouts/MainLayout";
import '../../../../css/crud/crud.css'


class CrudUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      createUser: {
        canEdit: false,
        fName: "",
        lName: "",
        age: "",
      },
      userMockup: {},
    };
  }

  onChange = (e, index) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ createUser: { ...this.state.createUser, [name]: value } });
  }

  onChangeUser = (e, index) => {

    const name = e.target.name;
    const value = e.target.value;
    let userNewValue = [...this.state.users]; //userNewvalue = ค่า users เดิมใน อาเรย์
    console.log("newValue", userNewValue[index]);
    userNewValue[index][name] = value; // ในตัวแปล [name] ไปที่ [index ที่เท่าไหร่ไม่รู้] เป็นค่า userNewValue
    this.setState({ users: [...userNewValue] });


  };

  onSubmit = () => {
    const { fName, lName, age } = this.state.createUser;
    if (fName && lName && age) {
      this.setState({
        users: [...this.state.users, { ...this.state.createUser, canEdit: false }],
        createUser: { canEdit: false, fName: "", lName: "", age: "" },
      });
    } else {
      this.setState({ alert: "กรุณากรอกข้อมูลให้ครบทุกช่อง" });
      setTimeout(() => {
        this.setState({ alert: "" });
      }, 1000);
    }
  }

  onCancel = (index) => {
    const { userMockup } = this.state;
    let updatedUsers = [...this.state.users];
    updatedUsers[index] = { ...userMockup, canEdit: false };
    this.setState({ users: updatedUsers });
  };

  onEdit = (index) => {
    const mockup = { ...this.state.users[index] };
    let updatedUsers = [...this.state.users];
    updatedUsers[index].canEdit = true;
    this.setState({
      users: updatedUsers,
      userMockup: mockup,
    });
  }

  onDelete = (index) => {
    const updatedUsers = [...this.state.users];
    updatedUsers.splice(index, 1);
    this.setState({ users: updatedUsers });
  }

  onSave = (index) => {
    let updatedUsers = [...this.state.users];
    updatedUsers[index].canEdit = false;
    this.setState({ users: updatedUsers });
  };

  render() {
    const { users, createUser , alert } = this.state;
    return (
      <React.Fragment>
        <Layout>
        <h2>List Users</h2>
        <div>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((value, index) => (
                 <React.Fragment key={index}>
                <tr>
                  <td>
                    <input type="text" name="fName" value={value.fName} disabled={!value.canEdit} onChange={(e) => this.onChangeUser(e, index)} />
                  </td>
                  
                  <td>
                    <input type="text" name="lName" value={value.lName} disabled={!value.canEdit} onChange={(e) => this.onChangeUser(e, index)} />
                  </td>

                  <td>
                    <input type="text" name="age" value={value.age} disabled={!value.canEdit} onChange={(e) => this.onChangeUser(e, index)} />
                  </td>
                  
                  <td>
                    {value.canEdit ? (
                      <>
                        <button type="button" className="btn btn-success" onClick={() => this.onSave(index)}>Save</button>
                        <button type="button" className="btn btn-danger" onClick={() => this.onCancel(index)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button type="button" className="btn btn-warning" onClick={() => this.onEdit(index)}>Edit</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.onDelete(index)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
                    </React.Fragment>
              ))}
  
                <tr>
                  <td>
                    <input type="text" name="fName" value={createUser.fName} onChange={(e) => this.onChange(e, users.length)} />
                  </td>
                  <td>
                    <input type="text" name="lName" value={createUser.lName} onChange={(e) => this.onChange(e, users.length)} />
                  </td>
                  <td>
                    <input type="text" name="age" value={createUser.age} onChange={(e) => this.onChange(e, users.length)} />
                  </td>
                  <td>
                    {!createUser.canEdit && (
                      <button type="button" className="btn btn-info" onClick={() => this.onSubmit()}>Add</button>
                    )}
                  </td>
                </tr>
           
              {alert && (
        <div className="alert alert-warning" role="alert">
          {alert}
        </div>
      )}
            </tbody>
          </table>
        </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default CrudUser;
