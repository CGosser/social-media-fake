import React from 'react';
import StatusList from './StatusList';
import NewStatusControl from './NewStatusControl';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      masterStatusList: [],
      statusFormVisible: false
    };
    this.handleAddingNewStatusToList = this.handleAddingNewStatusToList.bind(this);
    this.handleToggle = this.toggle.bind(this);
  }

  handleAddingNewStatusToList(newStatus) {
    let newMasterStatusList = this.state.masterStatusList.slice();
    newMasterStatusList.push(newStatus);
    this.setState({masterStatusList: newMasterStatusList});
  }

  toggle() {
    if(this.state.statusFormVisible) {
      this.setState({statusFormVisible: false});
    } else {
      this.setState({statusFormVisible: true});
    }
  }

  render() {
    let visible;
    if(this.state.statusFormVisible) {
      visible = <NewStatusControl
        onNewStatusCreation={this.handleAddingNewStatusToList}
      />;
    }

    return (
      <div>
        <h1>Social Media App Mock</h1>
        <button onClick={this.handleToggle}>Add Status</button>
        {visible}
        <StatusList
          statusList={this.state.masterStatusList}
        />
      </div>
    );
  }
}

export default App;
