import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div>
        <div className='video'>
            <ReactPlayer 
                url={'https://www.youtube.com/watch?v=WQJiyl_ayX0'}
                playing={false}
                controls={true}
            />
        </div>
    </div>
  )
}

export default Video