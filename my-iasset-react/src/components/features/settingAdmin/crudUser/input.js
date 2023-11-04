import React from "react";
import Layout from "../../../layouts/MainLayout";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, onChangeIn, onSave, onCancel, onEdit, index } = this.props;

    return (
        <Layout> 
      <div className="inputAll">
        <tr>
          <td>
            <input
              type="text"
              name="firstName"
              value={value ? value.firstName : ""}
              onChange={(e) => onChangeIn(e, index)}
            />
          </td>
          <td>
            <input
              type="text"
              name="lastName"
              value={value ? value.lastName : ""}
              onChange={(e) => onChangeIn(e, index)}
            />
          </td>
          <td>
            <input
              type="number"
              name="age"
              value={value ? value.age : ""}
              onChange={(e) => onChangeIn(e, index)}
            />
          </td>
          <td>
            {value.canEdit ? (
              <div>
                <button className="btn btn-success" onClick={() => onSave(index)}>
                  Save
                </button>
                <button className="btn btn-outline-dark" onClick={() => onCancel(index)}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className="btn btn-warning" onClick={() => onEdit(value, index)}>
                Edit
              </button>
            )}
            <button className="btn btn-danger" onClick={() => this.onDelete(index)}>
              Delete
            </button>
          </td>
        </tr>
      </div>
      </Layout> 
    );
  }
}

export default Input;
