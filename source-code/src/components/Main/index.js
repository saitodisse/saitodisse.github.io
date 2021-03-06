import React from 'react'
import {connect} from 'cerebral/react'
import Curriculum from '../Curriculum'
import './styles.css'

const pages = {
  null: {
    component: Curriculum,
    title: 'cv',
    backgroundColor: '#fff'
  }
}

export default connect({
  currentPage: 'currentPage',
  title: 'title'
},
  function App (props) {
    const Page = pages[props.currentPage].component
    const title = pages[props.currentPage].title
    const backgroundColor = pages[props.currentPage].backgroundColor
    return (
      <div id='main-container' style={{backgroundColor}}>
        <div id='top-container'>
          <h1 className='title'>
            {title}
          </h1>
          <a href='https://github.com/saitodisse'>github</a>
        </div>
        <Page />
      </div>
    )
  }
)
