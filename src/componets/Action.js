import React from 'react'
import data from "../data/actions.json";
import { FaCheck, FaTimes } from "react-icons/fa";

import * as actiondesc from "../constants"
import { generate_avatar_data } from '../utility'
import { Card } from 'react-bootstrap';
import moment from 'moment';

const actionDesc = actiondesc.actionDescriptionMap
const { actionStatus } = data

export const Action = () => {
  const handleIgnoreTodo = () => { }
  const handleCompleteTodo = () => { }
  return (
    <div >
      <div className='notification-header'>
        <h4 className='fx2'>Action Needed</h4>
        <h5 className='fx1'> <button className='active'>{"Pending"}</button></h5>
        <h5 className='fx1'><button>{"Ignored"}</button></h5>
        <h5 className='fx1'><button>{"Completed"}</button></h5>
      </div>
      <hr />
      <ul className='action-wrappr'>
        {data.map((todo, index) => {
          if (todo.status == "pending" && Object.keys(actionDesc)[0] == "FORM") {

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
                            <span className="title">{todo.event_type}</span>
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
                          <button className='btn-icon--red' onClick={() => handleCompleteTodo(index)}>{<FaTimes />}</button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </li>
              </>
            );
          }

          return null;
        })}
      </ul>

    </div>
  )
}
