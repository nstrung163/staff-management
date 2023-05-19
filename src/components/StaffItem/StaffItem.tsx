import { useOutletContext, useParams } from 'react-router-dom'

export default function StaffItem() {
  const { id } = useParams()
  const contextValue = useOutletContext()
  return <div>{`StaffItem ${id}`} </div>
}
