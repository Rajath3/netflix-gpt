import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'

const VideoCard = ({data}) => {
    return (
        <div className='w-48 px-4'>
            <img alt='Movie' src={CDN_IMG_URL + data?.poster_path} />
        </div>
  )
}

export default VideoCard