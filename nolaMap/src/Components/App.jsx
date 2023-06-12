import { useEffect, useState } from 'react'
import '../css/App.css'

import { strGet } from '../js/functions'
import StrMap from './StrMap'
/*Below here are just test components */ 
import Header from './Header'
/*
Unused image component
import reactLogo from '../assets/react.svg'

Below were just needed to test react's Context centralized store
import { useContext } from 'react'
import { StrDataContext } from '../Contexts/StrDataContext'
*/

function App() {
  const [count, setCount] = useState(0)
  const [strData, setStrData] = useState({
    url: 'https://data.nola.gov/resource/rbhq-zbz9.json',
    strListings:[],
    displayStrData:{},
    altLinks: ["www.google.com", "www.purple.com", "www.whatismyip.com"],
    showMap: true,
    showHeader: true
  })

  /*
  The below is just a demonstration to show component reusability.
  */
  const navItems = strData.altLinks.map((link,index) => (
    < Header 
    linkName={`Link${index}`} 
    url={link}
    />
  ))
  
  /*
  --just for testing useContext implementation. remove later
  const testContextData = testData
  */
  
  const handleClick = async (url) => {
    const freshStrData = await strGet(url)
    setStrData((prev) => ({...prev,strListings:freshStrData}))
    console.log('freshStrData in APPjsx',freshStrData[0]) // returns object data
  }

  useEffect(() => {
    console.count('useEffect count')
    //console.log('strDataDOTlistings in useEffect',strData.strListings)
  },[strData.strListings])

  return (
    <div className="App">
      <h1>STR listsing in New Orleans</h1>
      < Header linkName="LINK Component TEST" url="THIS IS THE url" />
      <p/>
      {strData.showHeader ? navItems : ''}
      <div className="card">
        <button onClick={() => handleClick(strData.url)}>
          Get STR Data
        </button>
        <span> count is {strData.strListings.length} </span>
        <div>
          {strData.showMap 
          ? < StrMap mapData={strData.strListings} /> 
          : ''
          }
        </div>
      </div>
    </div>
  )
}

export default App
