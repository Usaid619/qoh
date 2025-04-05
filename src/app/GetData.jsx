import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getCategoriesAndStyle} from '@/store/categorySlice'
import {getRecommendeds} from '@/store/recommendedSlice'

const Get_data = ({children}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategoriesAndStyle())
        dispatch(getRecommendeds())
    },[])
  return children
}

export default Get_data
