import React, { useEffect, useState } from 'react'
import { CardItem } from './CardItem'

export const Main = () => {
    const [data, setData] = useState([])
    let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

    const getAllRestaurantsList = async () => {
        const response = await fetch(url)
        const result = await response.json()
        setData(result.data.cards[2].data.data.cards)
    }

    useEffect(() => {
        getAllRestaurantsList()
    }, [])
    console.log(data)
    return (
        <>
            <hr />
            <CardItem cardinfo={data} />
        </>
    )
}
