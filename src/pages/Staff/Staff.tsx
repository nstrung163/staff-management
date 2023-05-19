import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import { NavLink, Route, Routes } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <h1 className='mb-6 text-lg'>Staff</h1>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 border-transparent p-4 ${
                  isActive ? 'border-blue-600 p-4 text-blue-600' : 'hover:border-gray-300 hover:text-gray-600'
                } `
              }
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 border-transparent p-4 ${
                  isActive ? 'border-blue-600 p-4 text-blue-600' : 'hover:border-gray-300 hover:text-gray-600'
                } `
              }
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<StaffList />}></Route>
        <Route path=':id' element={<StaffItem />}></Route>
        <Route path='add' element={<AddStaff />}></Route>
      </Routes>
      {/* <Outlet context={{ profile: { name: 'Trung' } }} /> */}
    </div>
  )
}
