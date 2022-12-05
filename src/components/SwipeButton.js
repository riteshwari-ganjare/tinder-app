import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
const SwipeButton = () => {
  return (
    <div className='swipeButtons'>

<IconButton  className="swipeButtons_repeat">
<ReplayIcon fontSize='large'/>
</IconButton>

<IconButton className="swipeButtons_left">
    <CloseIcon fontSize='large'/>
</IconButton>

<IconButton  className="swipeButtons_star">
<StarIcon fontSize='large'/>
</IconButton>

<IconButton className="swipeButtons_right">
    <FavoriteIcon fontSize='large'/>
</IconButton>

<IconButton className="swipeButtons_lightening">
    <FlashOnIcon fontSize='large'/>
</IconButton>

    </div>
  )
}

export default SwipeButton