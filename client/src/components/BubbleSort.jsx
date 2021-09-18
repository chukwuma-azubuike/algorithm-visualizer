import { useEffect, useState } from "react";
import ArraysBars from "./ArrayBar";
import { unSortedArray } from "../data";
import delay from "../utils/delay";

export default function BubbleSort() {

    const [arrayBars, setArrayBars] = useState([])
    const [bg, setBg] = useState(false)
    // const []

    const bgColor = () => {
        return 'grey'
    }

    const bubbleSort = async (initArray, time) => {

        let arr = [...initArray]

        for (let i = 1; i < arr.length; i++) {

            for (let j = 0; j < arr.length - 1; j++) {

                if (arr[j] > arr[await delay(i, time)]) {

                    [arr[i], arr[j]] = [arr[j], arr[i]]
                    setArrayBars(arr)
                }
            }

            setArrayBars(arr)
            console.log('bubbleSorted', arr)
        }
        setArrayBars(arr)
    }

    useEffect(() => {
        bubbleSort(unSortedArray, 0)
    }, [])

    return (
        <div className='sort-container'>
            {arrayBars.map((item, index) =>
                <ArraysBars
                    currentMin={sessionStorage.getItem('currentMin')}
                    color={bg || bgColor(index)}
                    element={item}
                    id={index}
                />)}
        </div>
    )
}