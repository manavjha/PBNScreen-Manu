import React, { useState } from 'react'
import data from "../data/actions.json";
import { FaCheck, FaTimes, FaFilter, FaCircle } from "react-icons/fa";

import * as actiondesc from "../constants"
import { generate_avatar_data } from '../utility'
import { Card } from 'react-bootstrap';
import moment from 'moment';

const actionDesc = actiondesc.actionDescriptionMap
const actionevt = actiondesc.actionEventTypeMap

// Utility function for Object value return
Object.prototype.getKeyByValue = function (value) {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      if (this[prop] === value)
        return prop;
    }
  }
}

export const Action = () => {
  const [data1, setdata1] = useState(data)
  const [isActive1, setIsActive1] = useState(null);

  const handleIgnoreTodo = () => {
    const newdata = [...data]
    const objIndex = newdata.findIndex((obj => obj.status == "pending"));
    newdata[objIndex].status = "ignored"
    setdata1(newdata)
  }

  const handleCompleteTodo = () => {
    const newdata = [...data]
    const objIndex = newdata.findIndex((obj => obj.status == "pending"));
    newdata[objIndex].status = "completed"
    setdata1(newdata)
  }

  const handlePending = (status) => {
    const filterdata = data.filter(d => d.status == status)
    setdata1(filterdata)
    setIsActive1(status);
  }

  const handleIgnored = (status) => {
    const filterdata = data.filter(d => d.status == status)
    setdata1(filterdata)
    setIsActive1(status);
  }
  const handleCompleted = (status) => {
    const filterdata = data.filter(d => d.status == status)
    setdata1(filterdata)
    setIsActive1(status);
  }

  return (
    <div >
      {/* <Activity color="#30718c" bgcolor="#f7f7f7" /> */}
      <div className='notification-header'>
        <h4 className='fx2'>Action Needed</h4>
        <h5 className='fx1'> <button type='button' className={isActive1 == "pending" ? 'active' : ''} onClick={() => handlePending("pending")}>{"Pending"}</button></h5>
        <h5 className='fx1'><button type='button' className={isActive1 == "ignored" ? 'active' : ''} onClick={() => handleIgnored("ignored")}>{"Ignored"}</button></h5>
        <h5 className='fx1'><button type='button' className={isActive1 == "completed" ? 'active' : ''} onClick={() => handleCompleted("completed")}>{"Completed"}</button></h5>
      </div>
      <hr />
      <ul className='action-wrappr'>
        {data1.map((todo, index) => {
          return (
            <>
              <li key={index}>
                <Card className='wrap'>
                  <Card.Body className='d-flex sb'>
                    <div className='msg'>
                      <span className='avatar' style={{ backgroundColor: generate_avatar_data(`${todo.patient_first_name}  ${todo.patient_last_name}`).color }}>{generate_avatar_data(`${todo.patient_first_name}  ${todo.patient_last_name}`).initials}</span>
                      <div className='main d-flex'>
                        <div>
                          <span className={actionevt.getKeyByValue(todo.event_type) == actionevt.getKeyByValue(todo.event_type) ? `${actionevt.getKeyByValue(todo.event_type)}-clr` : 'title'}>{actionevt.getKeyByValue(todo.event_type)}</span>
                        </div>
                        <div>
                          {`${todo.patient_first_name}  ${todo.patient_last_name} ${actionDesc?.FORM.Desc} `}
                        </div>
                      </div>
                    </div>
                    <div >
                      <div className='msgsince'>{moment((todo.date_created.split("T")[0]).split("-").join(""), "YYYYMMDD").fromNow()}</div>
                      <div className={todo.status == "completed" || todo.status == "ignored" ? 'inactive' : ''}>
                        <button className='btn-icon--green' onClick={() => handleCompleteTodo()}>{<FaCheck />}</button>
                        <button className='btn-icon--red' onClick={() => handleIgnoreTodo(index)}>{<FaTimes />}</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  )
}
