import React from 'react'
import InfoLayout from '../components/info/InfoLayout'

const infoPage = props => {
  console.log(props)
  return <InfoLayout backTo={props.location.state.prevPath || '/'} />
}

export default infoPage
