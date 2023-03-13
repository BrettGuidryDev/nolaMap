import { useState } from 'react'
import { Map, Marker, Overlay } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import MarkerOverlay from './MarkerOverlay'


function StrMap(props) {
    const [center, setCenter] = useState([29.953535, -90.079798])
    const [zoom, setZoom] = useState(13.2)
    const [infoOver, setInfoOver] = useState({
        type:'', 
        address:'',
        anchor:[30,-90],
        visible:false,
        commercialVisible:true,
        residentialVisible:true,
    })

    function handleStrTypebuttons(type){
        
        if(type === 'residential'){
            if(infoOver.residentialVisible === true){
                setInfoOver({ ...infoOver, residentialVisible:false })
            } else {
                setInfoOver({ ...infoOver, residentialVisible:true })
            }
            
        } 

        if(type === 'commercial'){
            if(infoOver.commercialVisible === true){
                setInfoOver({ ...infoOver, commercialVisible:false })
            } else {
                setInfoOver({ ...infoOver, commercialVisible:true })
            }
            
        }

       
    }

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

    const mapMarkersCommercial = props.mapData.map((e,i) =>{ 
        const {address , type} = e
        if(type === 'Short Term Rental Commercial Owner'){
            return (
                <Marker 
                anchor={[e.y, e.x]} 
                key={i} 
                width={25}
                payload={e}
                color={'#FF6166'}
                onClick={handleMarkerClick}
            />)
        } 
    })

    const mapMarkersResidential = props.mapData.map((e,i) =>{ 
        const {address , type} = e  
        if(type === 'Short Term Rental Residential Owner'){
            return (
                <Marker 
                anchor={[e.y, e.x]} 
                key={i} 
                width={25}
                payload={e}
                color={'#93C0D0'}
                onClick={handleMarkerClick}
            />)
        }
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
                <button 
                    className={ infoOver.residentialVisible ? 'strTypeFilterTrue' : 'strTypeFilterFalse' }
                    onClick={() => handleStrTypebuttons('residential')} 
                    
                >
                    Residential
                </button>
                {infoOver.visible ? 
                    <Overlay 
                        className='overlay'
                        anchor={infoOver.anchor[0]} 
                        offset={[0, 100]}
                    >
                        <MarkerOverlay address={infoOver.address} type={infoOver.type}/>
                    </Overlay> 
                    : ''
                }
                {infoOver.commercialVisible ? mapMarkersCommercial : ''}
                {infoOver.residentialVisible ? mapMarkersResidential : ''}
                <button 
                    className={ infoOver.commercialVisible ? 'strTypeFilterTrue' : 'strTypeFilterFalse' }
                    onClick={() => handleStrTypebuttons('commercial')} 
                >
                    Commercial
                </button>
            </Map>
        </div>
    )
}


export default StrMap;