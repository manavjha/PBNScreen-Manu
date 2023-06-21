import React from 'react'

import notificationData from '../data/notifications.json'
import { Card } from 'react-bootstrap';
import * as notificationDesc from "../constants"
import { generate_avatar_data } from '../utility'
import moment from 'moment';

const notificationTagline = notificationDesc.notificationEventTypeMap;
const notificationdesc = notificationDesc.notificationDescriptionMap

Object.prototype.getKeyByValue = function (value) {
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      if (this[prop] === value)
        return prop;
    }
  }
}

export const Notification = () => {
  return (
    <div >
      <div className='notification-header'>
        <h4 className='fx2'>Notification</h4>
        <h5 className='fx1'> <button className='active'>{"Unread"}</button></h5>
        <h5 className='fx1'> <button >{"All"}</button></h5>
      </div>
      <div className='action-wrappr'>
        {

          notificationData.map(data => {
            if (data.status == "unread") {
              return <>
                <Card className='wrap'>
                  <Card.Body className='d-flex-1 '>
                    <div className='msg'>
                      <span className='avatar' style={{ backgroundColor: generate_avatar_data(`${data.patient_first_name}  ${data.patient_last_name}`).color }}>{generate_avatar_data(`${data.patient_first_name}  ${data.patient_last_name}`).initials}</span>
                      <div className='main d-flex'>
                        <div className='notificationagesince'>
                          {/*<span className='title'>{Object.keys(notificationdesc)[0].toLowerCase()}</span> */}
                          <span className='title'>{notificationTagline.getKeyByValue(data.event_type)}</span>
                          <div className='msgsince'>{moment((data.date_created.split("T")[0]).split("-").join(""), "YYYYMMDD").fromNow()}</div>
                        </div>
                        <div>
                        {notificationTagline.getKeyByValue(data.event_type) =="PAYMENT_RECEIVED" && 
                          `${data.payment_amount} ${notificationdesc.PAYMENT.Desc} ${data.patient_first_name} ${data.patient_last_name} `
                         }

                        {notificationTagline.getKeyByValue(data.event_type) =="APPOINTMENT_CONFIRMED" && 
                          ` ${data.patient_first_name} ${data.patient_last_name} ${notificationdesc.APPOINTMENT.Desc}`
                         }

                      {notificationTagline.getKeyByValue(data.event_type) =="FORM_SUBMITTED" && 
                          ` ${data.patient_first_name} ${data.patient_last_name} ${notificationdesc.FORM.Desc} ${data.date_created}`
                         }
                          </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </>
            }

          })
        }
      </div>

    </div>
  )
}
