
import React, { useEffect } from 'react'
import Videos from '../../components/Videos'
import { useDispatch } from 'react-redux'
import youtubeApi from '../../api/youtubeApi'
import { getVideos } from '../../redux/features/videoSlice'

const Home = () => {

    const dispatch = useDispatch()

    const getYoutubeVideos =async ()=>{
        try {
            const {data} = await youtubeApi.get(`/videos?chart=mostPopular`)
            console.log(data);
            dispatch(getVideos(data))
        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        getYoutubeVideos()
    }, [])

  return (
    <div>
        <Videos/>
        home
    </div>
  )
}

export default Home