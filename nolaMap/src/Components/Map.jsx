import { Map, Marker, Overlay } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import MarkerOverlay from './MarkerOverlay'
import { useState } from 'react'


function StrMap(props) {
    const [center, setCenter] = useState([29.953535, -90.079798])
    const [zoom, setZoom] = useState(13.2)
    const [infoOver, setInfoOver] = useState({
        type:'', 
        address:'',
        anchor:[30,90],
        visible:false
    })


    function handleMarkerClick(event){
        const {address , type} = event.payload
        console.log('HANDLEMOUSEOClick',address,'\n' , type, event.anchor)
        setInfoOver({...infoOver,type:type, address:address,anchor:[event.anchor], visible:true})
        console.log('infoOver',infoOver.anchor)
    }
    
    function handleMapClick(){
        setInfoOver({
            ...infoOver,
            type:'', 
            address:'',
            visible:false
        })
    }

    const mapMarkers = props.mapData.map((e,i) =>{ 
        const {address , type} = e
        
        return (
            <Marker 
            anchor={[e.x, e.y]} 
            key={i} 
            width={25}
            payload={e}
            onClick={handleMarkerClick}
        />)
    })
 
    //console.log('TEST MAP COMPONENT',props.mapData)
 
    return (
        <div className='strMap'>
            <Map 
                provider={osm}
                height={600}
                width={900}
                center={center} 
                zoom={zoom}
                maxZoom={18}
                onClick={handleMapClick}
                onBoundsChanged={({center, zoom}) => {
                    setCenter(center)
                    setZoom(zoom)
                }}
            >
                {mapMarkers}
                {infoOver.visible ? <Overlay 
                    className='overlay'
                    anchor={infoOver.anchor[0]} 
                    offset={[50, 259]}
                >
                    <MarkerOverlay info={infoOver.address}/>
                    {/* <div className='markerOverlay' style={{width:100, height:100}}>
                        <h1>this is a test</h1>
                    </div> */}
                </Overlay> : ''}
            </Map>
        </div>
    )
}


export default StrMap;