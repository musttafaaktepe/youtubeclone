import axios from 'axios'
import React, { useEffect } from 'react'
import Videos from '../../components/Videos'

const Home = () => {

    const baseUrl ="https://googleapis.com/youtube/v3"

    const getYoutubeVideos =async ()=>{
        try {
            await axios.get(`${baseUrl}/videos?part=snippetchart=mostPopular`, {
                params:{
                    key:process.env.REACT_APP_API_KEY,
                    maxResults:50
                }
            } )
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