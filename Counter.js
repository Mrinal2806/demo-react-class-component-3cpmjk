import React, { Component } from 'react';
import UserTable from './userTable';
const taskList = [
  { id: '1', task: 'Complete my task 1 before EOD' },
  { id: '2', task: 'Setup the cdn for the deployment of the new screen' },
  { id: '3', task: 'Update my resume with the latest updates' },
  { id: '4', task: 'Go for swimming in the evening' },
  { id: '5', task: 'Buy groceries from the market' },
];

export default class Counter extends Component {
  state = {
    count: this.props.initialCount,
    myList: [],
    selectedIndex: -1,
    inputData: { task: '', newTask: '' },
  };

  componentDidMount() {
    console.log('This only runs when the component mounts');
    let myList = JSON.parse(localStorage.getItem('list'));
    if (myList) {
      this.setState({ myList });
    } else {
      localStorage.setItem('list', JSON.stringify(taskList));
      this.setState({ myList: taskList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('This method runs whenever the component re-renders');

    if (this.state.count !== prevState.count) {
      console.log('This runs when the count property on state changes');
    }
  }

  deleteTask = (id) => {
    console.log('item to be deleted', id);
    let { myList } = this.state;

    myList.splice(id, 1);
    console.log('removed data', myList);
    localStorage.setItem('list', JSON.stringify(myList));
    this.setState({ myList });
  };

  updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  editRow = (i) => {
    let { selectedIndex, myList, inputData } = this.state;
    selectedIndex = i;
    inputData['task'] = myList[i]['task'];
    this.setState({ selectedIndex, inputData });
  };

  handleChange = (event) => {
    let { inputData } = this.state;
    console.log('event', event.target.name);
    inputData[event.target.name] = event.target.value;
    this.setState({ inputData });
  };

  updateTask = (id) => {
    console.log('item to be upsaye', id);
    let { myList, inputData } = this.state;

    myList[id].task = inputData['task'];
    localStorage.setItem('list', JSON.stringify(myList));
    this.setState({
      myList,
      selectedIndex: -1,
      inputData: { task: '', newTask: '' },
    });
  };

  addTask = () => {
    let { inputData, myList } = this.state;
    console.log('new task being added', inputData);
    if (inputData.newTask.length > 0) {
      myList.push({ id: myList.length + 1, task: inputData['newTask'] });
      //   localStorage.setItem('list', JSON.stringify(myList));
      inputData.newTask = '';
      this.setState({ inputData, myList });
    }
  };

  render() {
    const { myList, selectedIndex, inputData } = this.state;
    console.log('mylist in main screen', myList);
    return (
      <>
        <h1>To Do App</h1>
        <div class="input-group mb-3">
          <input
            type="text"
            value={inputData.newTask}
            name="newTask"
            class="form-control"
            placeholder="Enter the task"
            onChange={this.handleChange}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              disabled={inputData.newTask.length < 1}
              onClick={() => this.addTask()}
            >
              Add Task
            </button>
          </div>
        </div>
        <UserTable
          myList={myList}
          inputData={inputData}
          editRow={this.editRow}
          deleteUser={this.deleteTask}
          selectedIndex={selectedIndex}
          updateTask={this.updateTask}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

Counter.defaultProps = {
  count: 0,
  name: 'demo',
};
