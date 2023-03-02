import { Map, Marker } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import { useState} from 'react'
import StrMarker from './Marker.jsx'

function StrMap(props) {
    const [center, setCenter] = useState([29.953535, -90.079798])
    const [zoom, setZoom] = useState(13.2)

    function handleMouseOver(event){
        const {address , type} = event.payload
        console.log('HANDLEMOUSEOVER',address , type)
        return `${type}  ${address}`
    }
    
    const mapMarkers = props.mapData.map((e,i) =>{ 
        const {address , type} = e
        
        return (
            <Marker 
            anchor={[e.x, e.y]} 
            key={i} 
            width={25}
            payload={e}
            onMouseOver={handleMouseOver}
        />)
    })
    //const {address, type, x, y} = props.mapData
    //console.log('TEST MAP COMPONENT',props.mapData)
    //  <Marker width={25} anchor={[29.9730275248524, -90.0805496425567]}/> 
    //inside map loop <StrMarker anchor={[e.x, e.y]} key={i} />
    //console.log('MAP test Marker component', mapMarkers)
    return (
        <div className='strMap'>
            <Map 
                provider={osm}
                height={600}
                width={900}
                center={center} 
                zoom={zoom}
                maxZoom={18}
                onBoundsChanged={({center, zoom}) => {
                    setCenter(center)
                    setZoom(zoom)
                }}
            >
                {mapMarkers}
            </Map>
        </div>
    )
}


export default StrMap;