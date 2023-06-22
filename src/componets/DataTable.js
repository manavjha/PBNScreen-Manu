import React, { useEffect, useState, useRef } from 'react'
import Table from 'react-bootstrap/Table';
import tableData from '../data/table.json'


export const DataTable = () => {
  const [paytypedata, setPaytypedata] = useState([])
  const [providerdata, setProviderdata] = useState([])
  const [employeetypedata, setEmployeetypedata] = useState([])
  const [isrenderpaytype, setIsrenderpaytype] = useState(false)
  const [isrenderprovidertype, setIsrenderprovidertype] = useState(false)
  const [isrenderemployeetype, setIsrenderemployeetype] = useState(false)

  const btnref1 = useRef(null)
  const btnref2 = useRef(null)
  const btnref3 = useRef(null)

  const [isActive, setIsActive] = useState(null);

  const paytypeDataId = tableData.values.reduce((all, item) => {
    let existItem = all.find(({ paytype_id }) => item.paytype_id === paytype_id);
    if (existItem) {
      existItem.amount += item.amount;
    } else {
      all.push(item);
    }
    return all;

  }, [])

  const employeetypeDataId = tableData.values.reduce((all, item) => {
    let existItem = all.find(({ employee_type_id }) => item.employee_type_id === employee_type_id);
    if (existItem) {
      existItem.amount += item.amount;
    } else {
      all.push(item);
    }
    return all;

  }, [])

  const providertypeDataId = tableData.values.reduce((all, item) => {
    let existItem = all.find(({ provider_id }) => item.provider_id === provider_id);
    if (existItem) {
      existItem.amount += item.amount;
    } else {
      all.push(item);
    }
    return all;

  }, [])

  useEffect(() => {
    // on page load default table data
    getPaytypeId()
  }, [])

  const getPaytypeId = (status) => {
    btnref1.current.textContent == "PaytypeID" ? setPaytypedata(paytypeDataId) : null
    setIsrenderpaytype(true)
    setIsrenderemployeetype(false)
    setIsrenderprovidertype(false)
    setIsActive(status);
  }

  const getProviderId = (status) => {
    btnref2.current.textContent == "ProviderID" ? setProviderdata(providertypeDataId) : null
    setIsrenderpaytype(false)
    setIsrenderemployeetype(false)
    setIsrenderprovidertype(true)
    setIsActive(status);
  }
  const getEmployeetypeId = (status) => {
    btnref3.current.textContent == "EmployeeTypeID" ? setEmployeetypedata(employeetypeDataId) : null
    setIsrenderpaytype(false)
    setIsrenderemployeetype(true)
    setIsrenderprovidertype(false)
    setIsActive(status);
  }
  return (
    <div className='p-3'>
      <div className='mb-2 table-filter'>
        <h5></h5>
        <h5> <button ref={btnref1} className={isActive == "PaytypeID" ? 'active' : 'title'} onClick={() => getPaytypeId("PaytypeID")}>{"PaytypeID"}</button></h5>
        <h5> <button ref={btnref2} className={isActive == "ProviderID" ? 'active' : ''} onClick={() => getProviderId("ProviderID")}>{"ProviderID"}</button></h5>
        <h5> <button ref={btnref3} className={isActive == "EmployeeTypeID" ? 'active' : ''} onClick={() => getEmployeetypeId("EmployeeTypeID")}>{"EmployeeTypeID"}</button></h5>
      </div>
      <Table bordered hover size="sm">
        {
          isrenderpaytype &&
          (<thead>
            <tr>
              <th>DATE</th>
              <th>PAYTYPE ID</th>
              <th>VALUE</th>
            </tr>
          </thead>)
        }

        {
          isrenderprovidertype &&
          (<thead>
            <tr>
              <th>DATE</th>
              <th>PROVIDERTYPE ID</th>
              <th>VALUE</th>
            </tr>
          </thead>)
        }

        {
          isrenderemployeetype &&
          (<thead>
            <tr>
              <th>DATE</th>
              <th>EMPLOYEETYPE ID</th>
              <th>VALUE</th>
            </tr>
          </thead>)
        }
        <tbody>
          { /** this piece of code will render on condition of paytypeID */}
          {
            isrenderpaytype && paytypedata.map(data => {
              return <tr>
                <td>{data.date}</td>
                <td>{tableData.categories.paytype_id[data.paytype_id]}</td>
                <td>{data.amount.toFixed(2)}</td>
              </tr>
            })
          }

          { /** this piece of code will render on condition of providertypeID */}
          {
            isrenderprovidertype && providerdata.map(data => {
              return <tr>
                <td>{data.date}</td>
                <td>{tableData.categories.provider_id[data.provider_id]}</td>
                <td>{data.amount.toFixed(2)}</td>
              </tr>
            })
          }

          { /** this piece of code will render on condition of employeetypeID */}
          {
            isrenderemployeetype && employeetypedata.map(data => {
              return <tr>
                <td>{data.date}</td>
                <td>{tableData.categories.employee_type_id[data.employee_type_id]}</td>
                <td>{data.amount.toFixed(2)}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  )
}
