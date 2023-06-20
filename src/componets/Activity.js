import React from 'react'
import { FaFilter, FaDotCircle } from "react-icons/fa";

import * as y from "../constants"

const actionfilter = y.actionFilterMap

export const Activity = ({ color, bgcolor }) => {
  return (
    <>
      <h4><FaFilter /> Filter Activity</h4>
      <ul>
        <span className='select'>Select all </span>
        {
          Object.keys(actionfilter).map(item => {
            return (<div key={item}>
              <li className="mt-2 mb-2 w-75 listitem" style={{ backgroundColor: bgcolor }}>

                <button type="button" className="btn-filter" style={{ color: color, backgroundColor: 'transparent' }}
                ><FaDotCircle />{item.toLowerCase()}</button></li>
            </div>)
          })
        }
      </ul>
    </>

  )

}
