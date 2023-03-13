import { useEffect, useState} from 'react'
import '../App.css'

import { strGet } from '../Logic/functions'
import StrMap from './Map'

/*
Unused image component
import reactLogo from '../assets/react.svg'

test of react's Context centralized store
import { useContext } from 'react'
import { StrDataContext } from '../Contexts/StrDataContext'
*/






function App() {
  const [count, setCount] = useState(0)
  const [strData, setStrData] = useState({
    url: 'https://data.nola.gov/resource/rbhq-zbz9.json',
    strListings:[],
    displayStrData:{}
  })
  
  /*
  --just for testing useContext implementation. remove later
  const testContextData = testData
  */
  
  const handleClick = async (url)=>{
    const freshStrData = await strGet(url)
    setStrData((prev)=> ({...prev,strListings:freshStrData}))
    console.log('freshStrData in APPjsx',freshStrData[0]) // returns object data
  }

  useEffect(() => {
    // let refresh = true
    // if(refresh = true){
    // }
    console.count('useEffect count')
    //console.log('strDataDOTlistings in useEffect',strData.strListings)
    //return () => refresh = false
  },[strData.strListings])

  

  

  //let dataDisplay = 'TMPtest' //!Object.keys(displayStrData).length ? placeholder : Object.values(displayStrData)
  //console.log(displayStrData, Object.keys(displayStrData), Object.values(displayStrData))
  
  // const formatDataforPresentation = (strData)=>{
  //   if (!Object.values(strData)) return ''
  //   let strDataArray = []
  //   console.log('strData', strData)
  //   for (const listing in strData){
  //     //console.log(strData[listing])
  //     let [address, type, x, y] = Object.values(strData[listing])

  //     //strDataArray.push(<div>{address} {type} {x} {y}</div>)
  //     //setDisplayStrData(strDataArray)
  //   }
  //   //console.log('strDataArray',strDataArray)
  //   //console.log('displayStrData:',displayStrData)
  // }

  // fetch('https://www.boredapi.com/api/activity')
  // .then(res => res.json())
  // .then(res => console.log(res))



  return (
    <div className="App">
      <h1>STR listsing in New Orleans</h1>
      <div className="card">
        <button onClick={() => handleClick(strData.url)}>
          Get STR Data
        </button>
        <span> count is {strData.strListings.length} </span>
        <div>
        {/* <div>
          <button onClick={() => formatDataforPresentation(strData)}>
          test
          </button>
        </div> */}
          <StrMap mapData={strData.strListings} /> 
        </div>
      </div>
    </div>
  )
}

export default App
