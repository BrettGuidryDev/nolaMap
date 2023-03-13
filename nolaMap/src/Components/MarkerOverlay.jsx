import React from 'react'

function MarkerOverlay(props) {
    console.log('MarkerOverlayTEST',props)

    return (
        <div className='markerOverlay' >
            {props.type}
            <hr/>
            {props.address}
        </div>
    )
}

export default MarkerOverlay