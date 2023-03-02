import { Map, Marker } from 'pigeon-maps'


function StrMarker(props){

    //const mapDataPoints = strData.strListings.map((e,i) => <StrMap mapData={e} key={i}/> )
    //const {address, type, x, y} = props.mapData
    console.log('STRMARKER Props',props.mapData)
    //'29.9730275248524', '-90.0805496425567'
    return(
            <Marker width={25} anchor={[x, y]}/>
    )
}


export default StrMarker;