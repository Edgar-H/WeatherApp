import React, {useState, useEffect} from 'react'
import Apiget from './Api.jsx'
import Error from './Error'

class WatchLocation extends React.Component {
    render() {
    if (navigator.geolocation) {
      return (
        <Apiget />
      )
    } else {
      return (
        <Error />
      )
    }
  }
}
export default WatchLocation