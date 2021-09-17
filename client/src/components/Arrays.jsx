export default function Arrays(props) {

    console.log('currentMin', props.currentMin)

    return (
        <div
            key={props.id}
            style={{
                width: '10px',
                height: `${props.element / 5}px`,
                background: props.color,
                margin: '1px',
            }}
        />
    )
}