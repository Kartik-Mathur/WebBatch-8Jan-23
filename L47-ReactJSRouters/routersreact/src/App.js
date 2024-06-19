import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Courses from './components/Courses'
import Cpp from './components/Courses/Cpp'
import Java from './components/Courses/Java'
import Python from './components/Courses/Python'
import Competitive from './components/Courses/Competitive'
import InterviewPrep from './components/Courses/InterviewPrep'
import { Error } from './components/Error'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/cpp' element={<Cpp />} /> */}
        <Route path='/courses' element={<Courses />}>
          <Route index element={<Python />} />
          <Route path='cpp' element={<Cpp />}>
            <Route path='cp' element={<Competitive />} />
            <Route path='ip' element={<InterviewPrep />} />
          </Route>
          <Route path='java' element={<Java />} />
          <Route path='python' element={<Python />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App 