import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import tableData from '../data/table.json'


export const DataTable = () => {
  const [paytypedata, setPaytypedata] = useState([])
  const [providerdata, setProviderdata] = useState([])
  const [employeetypedata, setEmployeetypedata] = useState([])


  const paytypeDataId = tableData.values.reduce((all, item) => {
    let existItem = all.find(({ provider_id }) => item.provider_id === provider_id);
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

useEffect( () => {
  getPaytypeId()
},[])

  const getPaytypeId = () => {
    setPaytypedata(paytypeDataId)
  }

  const getProviderId = () => {
    setProviderdata(paytypeDataId)
  }
  const getEmployeetypeId = () => {
    setEmployeetypedata(employeetypedata)
  }
  return (
    <div className='p-3'>
      <div className='mb-2 table-filter'>
        <h5></h5>
        <h5> <button className='active' onClick={getPaytypeId}>{"PaytypeID"}</button></h5>
        <h5> <button onClick={getProviderId}>{"ProviderID"}</button></h5>
        <h5> <button onClick={getEmployeetypeId}>{"EmployeeTypeID"}</button></h5>
      </div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>DATE</th>
            <th>PAYTYPE ID</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          { /** this piece of code will render on condition of paytypeID */}
          {
            paytypedata && paytypedata.map(data => {
              return <tr>
                <td>{data.date}</td>
                <td>{tableData.categories.provider_id[data.provider_id]}</td>
                <td>{data.amount.toFixed(2)}</td>
              </tr>
            })
          }

          { /** this piece of code will render on condition of providertypeID */}
          {
            providerdata && providerdata.map(data => {
              return <tr>
                <td>{data.date}</td>
                <td>{tableData.categories.provider_id[data.provider_id]}</td>
                <td>{data.amount.toFixed(2)}</td>
              </tr>
            })
          }

          { /** this piece of code will render on condition of employeetypeID */}
          {
            employeetypedata && employeetypedata.map(data => {
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
