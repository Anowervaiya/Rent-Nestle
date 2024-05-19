import PropTypes from 'prop-types'
import queryString from 'query-string'
import { useNavigate, useSearchParams } from 'react-router-dom'

const CategoryBox = ({ label, icon: Icon }) => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
  const category = params
 
  const navigate = useNavigate()


  const handleClick = () => {
    // 1. Create Query String
   

    const url = queryString.stringifyUrl({
      url: '/',
      query: { category: label },
    });
    // url output---> /?category=label

    // 2. Set query string in url
    navigate(url)
  }
  return (
    <div
      onClick={handleClick}
      className={`flex 
      border border-orange-500 rounded-lg mr-1
    flex-col 
    shadow-lg
    items-center 
    justify-center 
    gap-2
    p-3
    border-b-2
   hover:text-orange-600
    transition
    cursor-pointer  ${
      category === label && 'border-b-neutral-800 text-neutral-800'
    } `}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
