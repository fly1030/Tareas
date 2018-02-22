// @flow
import React from 'react';
import folderImage from './folder-settings-button.svg';
import './App.css';
import type keyType from './tareasLeftBar.react';

type Props = {'selectedKey': keyType};

type Tareas = {
  id: string,
  title: string,
  status: "open" | "closed",
  owner: string,
  creator: string,
  subscribers: Array<string>,
  description: string,
  priority: "high" | "medium" | "low" | "wishlist",
};

const currUser = "tester1";
const tasks = [
  {
    id: "000000",
    title: "test task 0",
    status: "open",
    owner: "tester1",
    creator: "tester1",
    subscribers: ["tester1", "tester2"],
    description: "test example 0",
    priority: "high",
  },
  {
    id: "000001",
    title: "test task 1",
    status: "open",
    owner: "tester1",
    creator: "tester2",
    subscribers: ["tester1"],
    description: "test example 1",
    priority: "medium",
  },
  {
    id: "000002",
    title: "test task 2",
    status: "open",
    owner: "tester2",
    creator: "tester1",
    subscribers: ["tester2"],
    description: "test example 2",
    priority: "low",
  },
  {
    id: "000003",
    title: "test task 3",
    status: "open",
    owner: "tester2",
    creator: "tester1",
    subscribers: ["tester1", "tester2"],
    description: "test example 3",
    priority: "low",
  },
];

// TODO: Once backend available, fetch all tasks async base on tab selected
class tareasList extends React.Component <Props> {
  render() {
    const tasksList = this._filterTasks();
    return (
      <div className="tareasList">
        {this._renderTareasList(tasksList)}
      </div>
    );
  }

  _renderTareasList(tasksList: Array<Tareas>) {
    return (
      <div>
        {tasksList.map((index, task) => {
          if (index % 2 === 0) {
            return (
              <div>
                <span className="TareasListItemId">T{task.id}</span>
                <span className="TareasListItemOwner">{task.owner}</span>
                <span className="TareasListItemTitle">{task.title}</span>
                <span className="TareasListItemStatus">{task.status}</span>
              </div>
            );
          } else {
            return (
              <div className="TareasListItem">
                <span className="TareasListItemId">T{task.id}</span>
                <span className="TareasListItemOwner">{task.owner}</span>
                <span className="TareasListItemTitle">{task.title}</span>
                <span className="TareasListItemStatus">{task.status}</span>
              </div>
            );
          }
        })}
      </div>
    );
  }

  _filterTasks(): Array<Tareas> {
    let filteredTasks = [];
    tasks.map(tareas => {
      if (this.props.selectedKey === 'Owner') {
        if (tareas.owner === currUser) {
          filteredTasks.push(tareas);
        }
      } else if (this.props.selectedKey === 'Created') {
        if (tareas.creator === currUser) {
          filteredTasks.push(tareas);
        }
      } else {
        if (tareas.subscribers.includes(currUser)) {
          filteredTasks.push(tareas);
        }
      }
    });
    return filteredTasks;
  }

}

export default tareasList;
