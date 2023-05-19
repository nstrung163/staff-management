import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFount from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Route, Routes, useRoutes } from 'react-router-dom'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff/*',
      element: <Staff />
    },
    {
      path: '*',
      element: <NotFount />
    }
  ])
  return (
    <div className='App'>
      <MainLayout>
        {elements}
        {/* <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/staff/*' element={<Staff />}>
            <Route index element={<StaffList />}></Route>
            <Route path=':id' element={<StaffItem />}></Route>
            <Route path='add' element={<AddStaff />}></Route>
          </Route>
          <Route path='*' element={<div>Not Found</div>}></Route>
        </Routes> */}
      </MainLayout>
    </div>
  )
}

export default App
