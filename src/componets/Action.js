import React, { useState } from 'react'
import data from "../data/actions.json";
import { FaCheck, FaTimes } from "react-icons/fa";

import * as actiondesc from "../constants"
import { generate_avatar_data } from '../utility'
import { Card } from 'react-bootstrap';
import moment from 'moment';

const actionDesc = actiondesc.actionDescriptionMap
const actionevt = actiondesc.actionEventTypeMap

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
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleIgnoreTodo = () => {


  }
  const handleCompleteTodo = (form) => {

  }

  const handlePending = (status) => {
    const filterdata = data.filter(d => d.status == status)
    setdata1(filterdata)
    setIsActive1(current => !current);
  }
  const handleIgnored = (status) => {
    const filterdata = data.filter(d => d.status == status)
    setdata1(filterdata)
    setIsActive2(current => !current);
  }
  const handleCompleted = (status) => {
    const filterdata = data.filter(d => d.status == status)
    setdata1(filterdata)
    setIsActive3(current => !current);
  }
  return (
    <div >
      <div className='notification-header'>
        <h4 className='fx2'>Action Needed</h4>
        <h5 className='fx1'> <button type='button' className={isActive1 ? 'active' : ''} onClick={() => handlePending("pending")}>{"Pending"}</button></h5>
        <h5 className='fx1'><button type='button' className={isActive2 ? 'active' : ''} onClick={() => handleIgnored("ignored")}>{"Ignored"}</button></h5>
        <h5 className='fx1'><button type='button' className={isActive3 ? 'active' : ''} onClick={() => handleCompleted("completed")}>{"Completed"}</button></h5>
      </div>
      <hr />
      <ul className='action-wrappr'>
        {data1.map((todo, index) => {
          //  if (todo.status == "pending" && Object.keys(actionDesc)[0] == "FORM") {

          return (
            <>
              <li key={index}>
                <Card className='wrap'>
                  <Card.Body className='d-flex sb'>
                    <div className='msg'>
                      <span className='avatar' style={{ backgroundColor: generate_avatar_data(`${todo.patient_first_name}  ${todo.patient_last_name}`).color }}>{generate_avatar_data(`${todo.patient_first_name}  ${todo.patient_last_name}`).initials}</span>
                      <div className='main d-flex'>
                        <div>
                          {/* <span className={"title " + (Object.keys(actionDesc)[0] == "form" ? 'form-tag' : 'title')}>{Object.keys(actionDesc)[0].toLowerCase()}</span> */}
                          <span className="title">{actionevt.getKeyByValue(todo.event_type)}</span>
                        </div>
                        <div>
                          {`${todo.patient_first_name}  ${todo.patient_last_name} ${actionDesc?.FORM.Desc} `}
                        </div>
                      </div>
                    </div>
                    <div >
                      <div className='msgsince'>{moment((todo.date_created.split("T")[0]).split("-").join(""), "YYYYMMDD").fromNow()}</div>
                      <div>
                        <button className='btn-icon--green' onClick={() => handleIgnoreTodo(index)}>{<FaCheck />}</button>
                        <button className='btn-icon--red' onClick={() => handleCompleteTodo(actionevt.getKeyByValue(todo.event_type))}>{<FaTimes />}</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </li>
            </>
          );
          //  }

        })}
      </ul>

    </div>
  )
}
