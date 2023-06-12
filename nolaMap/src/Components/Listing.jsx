import { render } from "react-dom"
import React, { useContext } from 'react'
import { formatDataforPresentation } from "../js/functions"
import { StrDataContext } from "../contexts/StrDataContext"

/*THIS COMPONENT CURRENTLY UNUSED*/

/*Classy reminder
export default class Listing extends React.Component {
    render() {
        const listingData = this.props.data
        console.log(this.props.data)
        return (
            <div>
                { listingData }
            </div>
        );
    }    
}
*/

function Listing(props) {
    const { testContextData } = useContext(StrDataContext)
    const listingData = props.data
    const strDataArray = []
    
    formatDataforPresentation(listingData)
    // const formatDataforPresentation = (listingData) => {
        //     for (const listing in listingData){
            //       let [address, type, x, y] = Object.values(listingData[listing])
            //       strDataArray.push(<div>{address} {type} {x} {y}</div>)
            //     }
            //     console.log('displayStrData:',address, type, x, y)
            //     console.log('strDataArray',strDataArray)
            // }
    return (
        <div>
            {testContextData}
            {/* {props.test} */}
        </div>
    );
}   
        
export default Listing;