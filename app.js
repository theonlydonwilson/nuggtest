#app does not function example purposes only

import React from 'react'
import { Modules } from '../src' 
import { Match, Miss, Link } from 'react-router'

export class App extends React.Component {
  
  render() {
    return <div>

      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/locator">to locator</Link></li>
        <li><Link to="/selector">to selector</Link></li>          
        <li><Link to="/grinder">to grinder</Link></li>
      </ul>
      
      <Match pattern="/" exactly render={() => 
        <div>we home</div>}/>
      
      <Match pattern="/locator" render={() => 
        <Modules entry="locator" load={require('./locator').default}>{        
          locator => locator ? <locator/> : <span>loading locator...</span>
        }</Modules>} />
      
      <Match pattern="/selector" render={() => 
        <Modules entry="selector" load={require('./selector').default}>{
          selector => selector ? <selector/> : <span>loading selector...</span>
        }</Modules>}/>
		
      <Match pattern="/grinder" render={() => 
        <Modules entry="grinder" load={require('./grinder').default}>{
          grinder => grinder ? <grinder/> : <span>loading grinder...</span>
        }</Modules>}/>

      <Miss render={() => <span>no match</span>}/>
        
    </div>
  }
}
