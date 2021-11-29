import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import Navbar from './Navbar'
import SortAndCompare from './SortAndCompareList/index'
import AuthorAdaptiveCard from './AuthorAdaptiveCard'
import Home from './Home'
import './styles.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/compareLists" element={<SortAndCompare />} />
          <Route path="/authorCard" element={<AuthorAdaptiveCard />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
