import React, { useEffect, useState } from 'react'

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
  const [data1, setData1] = useState(notificationData)
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleUnread = function(status){
    const filterdata = data1.filter(d => d.status == status)
    console.log(filterdata)
    if(filterdata.length >0){
      setData1(filterdata)
    }
    setIsActive1(current => !current);
  }
  const handleAll = function(status)  {
    const filterdata = data1.filter(d => d.status == status)
    if(filterdata.length >0){
      setData1(filterdata)
    }
    
    console.log(filterdata)
    setIsActive2(current => !current);
  }


  return (
    <div >
      <div className='notification-header'>
        <h4 className='fx2'>Notification</h4>
        <h5 className='fx1'> <button  className={isActive1 ? 'active' : ''} onClick={handleUnread.bind(null,"unread")}>{"Unread"}</button></h5>
        <h5 className='fx1'> <button  className={isActive2 ? 'active' : ''} onClick={handleAll.bind(null,"all")}>{"All"}</button></h5>
      </div>
      <div className='action-wrappr'>
        {

          data1.map(data => {
            //  if (data.status == "unread") {
            return <>
              <Card className='wrap'>
                <Card.Body className='d-flex-1 '>
                  <div className='msg'>
                    <span className='avatar' style={{ backgroundColor: generate_avatar_data(`${data.patient_first_name}  ${data.patient_last_name}`).color }}>{generate_avatar_data(`${data.patient_first_name}  ${data.patient_last_name}`).initials}</span>
                    <div className='main d-flex'>
                      <div className='notificationagesince'>
                        {/*<span className='title'>{Object.keys(notificationdesc)[0].toLowerCase()}</span> */}
                        <span  className={notificationTagline.getKeyByValue(data.event_type) == notificationTagline.getKeyByValue(data.event_type)? `${notificationTagline.getKeyByValue(data.event_type)}-clr` : 'title'}>{notificationTagline.getKeyByValue(data.event_type)}</span>
                        <div className='msgsince'>{moment((data.date_created.split("T")[0]).split("-").join(""), "YYYYMMDD").fromNow()}</div>
                      </div>
                      <div>
                        {notificationTagline.getKeyByValue(data.event_type) == "PAYMENT_RECEIVED" &&
                          `${data.payment_amount} ${notificationdesc.PAYMENT.Desc} ${data.patient_first_name} ${data.patient_last_name} `
                        }

                        {notificationTagline.getKeyByValue(data.event_type) == "APPOINTMENT_CONFIRMED" &&
                          ` ${data.patient_first_name} ${data.patient_last_name} ${notificationdesc.APPOINTMENT.Desc}`
                        }

                        {notificationTagline.getKeyByValue(data.event_type) == "FORM_SUBMITTED" &&
                          ` ${data.patient_first_name} ${data.patient_last_name} ${notificationdesc.FORM.Desc} ${data.date_created}`
                        }

                        {notificationTagline.getKeyByValue(data.event_type) == "APPOINTMENT_REQUEST_ACCEPTED" &&
                          ` ${data?.patient_first_name} ${data?.patient_last_name} ${notificationdesc.APPOINTMENT_REQUESTED.Desc} ${data.scheduled_appointment_start_time}`
                        }
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </>
            //  }

          })
        }
      </div>

    </div>
  )
}
