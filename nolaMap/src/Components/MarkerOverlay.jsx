/*This is the component that drops the marker on the map. It is re-filled with new data */

function MarkerOverlay(props) {
    console.log('MarkerOverlayTEST',props)
    return (
        <div className='markerOverlay'>
            {props.type}
            <hr/>
            {props.address}
        </div>
    )
}

export default MarkerOverlay