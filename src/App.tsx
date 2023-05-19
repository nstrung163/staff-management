import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/staff' element={<Staff />}>
            <Route index element={<StaffList />}></Route>
            <Route path=':id' element={<StaffItem />}></Route>
            <Route path='add' element={<AddStaff />}></Route>
          </Route>
          {/* <Route path='/staff' element={<Staff />}></Route>
          <Route path='/staff/:id' element={<StaffItem />}></Route>
          <Route path='/staff/add' element={<AddStaff />}></Route> */}
          <Route path='*' element={<div>Not Found</div>}></Route>
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
