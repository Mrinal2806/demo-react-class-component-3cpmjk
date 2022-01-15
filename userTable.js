import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const UserTable = (props) => (
  <div className="table-responsive">
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>TASK</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody className="tableHeight">
        {props.myList.length > 0 ? (
          props.myList.map((user, i) => (
            <React.Fragment>
              {i === props.selectedIndex ? (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <input
                      className="form-control inputCSS"
                      name="task"
                      value={props.inputData['task']}
                      onChange={props.handleChange}
                    />
                  </td>

                  <td className="text-center">
                    {' '}
                    <button
                      onClick={() => {
                        props.updateTask(i);
                      }}
                      className="btn"
                    >
                      <i className="bi bi-check2-circle"></i>
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.task}</td>
                  <td className="text-center">
                    <button
                      onClick={() => {
                        props.editRow(i);
                      }}
                      className="btn"
                      disabled={props.selectedIndex != -1}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      onClick={() => props.deleteUser(i)}
                      className="btn"
                      disabled={props.selectedIndex != -1}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan={12}>
              No Tasks
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default UserTable;
