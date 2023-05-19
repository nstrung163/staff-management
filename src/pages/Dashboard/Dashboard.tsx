import { useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

export default function Dashboard() {
  const location = useLocation()
  // console.log(location)
  const [searchParams] = useSearchParams()
  // console.log('searchParams', Object.fromEntries([...searchParams]))

  useEffect(() => {
    // Just log when changing the params on url
    console.log('searchParams', Object.fromEntries([...searchParams]))
  }, [searchParams])
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
      <p className='text-cyan-500'>{location.state}</p>
      <Link to='/?search=name&order=asc'>Name</Link>
      <br />
      <Link to='/?search=age&order=desc'>Age</Link>
      <br />
      <Link to='/?search=height&order=asc'>Height</Link>
    </div>
  )
}
