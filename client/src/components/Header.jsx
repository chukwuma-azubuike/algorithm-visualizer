import styles from '../index.css'

export default function Header() {
    return (
        <nav style={{ display: 'flex', padding: '10px 50px', background: 'rgb(27, 75, 117)' }} className='justify'>
            <button>Generate New Array</button>
            <ul style={{ display: 'flex', listStyle: 'none' }} >
                <li>Selection Sort</li>
                <li>Bubble Sort</li>
                <li>Merge Sort</li>
                <li>Heap Sort</li>
                <li>Quick Sort</li>
                <li>Insertion Sort</li>
            </ul>
            <label>Change Array Size
                <input type='range' min='100' max='500' />
            </label>
            <label>Change Sorting Speed
                <input type='range' min='100' max='500' />
            </label>
        </nav>
    )
}