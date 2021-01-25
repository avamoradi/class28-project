import ReactGa from 'react-ga'
import React, { useEffect } from 'react'

const ReactGaApp = () => {
  useEffect(() => {
    ReactGa.initialize('UA-188012640-1')
    ReactGa.pageview('/product')
  }, [])
  return
}

export default ReactGaApp
