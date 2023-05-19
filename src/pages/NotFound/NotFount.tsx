import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFount() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: 'Redirect from not found page'
      })
    }, 2000)
  }, [navigate])
  return <div>Not Found</div>
}
