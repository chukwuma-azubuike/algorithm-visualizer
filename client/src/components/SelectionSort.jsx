import { useState, useEffect } from "react";
import ArraysBars from "./ArrayBar";
import { unSortedArray } from "../data";
import delay from "../utils/delay";

export default function SelectionSort() {

    const [arrayBars, setArrayBars] = useState(unSortedArray);
    const [highlightElement, setHighlightElement] = useState();
    const [bg, setBg] = useState(false)

    async function selectionSort(initArray, time) {

        setBg(false)

        sessionStorage.setItem('sorted', false)

        let arr = [...initArray];

        for (let i = 0; i < arr.length - 1; i++) {

            let currentMin = await delay(i, time);
            setHighlightElement(i)
            setArrayBars(arr)

            for (let k = i + 1; k < arr.length; k++) {

                sessionStorage.setItem('loopElement', i)

                if (arr[k] < arr[currentMin]) {
                    currentMin = k;
                }
                sessionStorage.setItem('currentMin', currentMin)
                setArrayBars(arr)
            }
            if (arr[currentMin] !== arr[i]) {
                [arr[i], arr[currentMin]] = [arr[currentMin], arr[i]];
            }
            setArrayBars(arr)
        }

        sessionStorage.setItem('sorted', true)
        setBg('blue')
        setArrayBars(arr)
        setTimeout(() => {
            alert('Sorted')
        }, 50)
        // return arr;
    }

    useEffect(() => {
        selectionSort(unSortedArray, 0);
    }, [])

    const bgColor = (index) => {

        let color = 'grey'

        if (index == sessionStorage.getItem('currentMin')) {
            color = 'red'
        } else if (index == sessionStorage.getItem('loopElement')) {
            color = 'green'
        } else {
            color = 'grey'
        }
        return color;
    }

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