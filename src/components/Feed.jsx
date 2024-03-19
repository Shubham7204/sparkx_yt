import { SideBar, Videos } from './';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Education');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {setVideos(data.items)})
  }, [selectedCategory]);

  return (
    <Stack
      sx = {{flexDirection: {sx: 'column', md: 'row'}}}
    >
      <Box
        sx = {{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}
      >
        <SideBar 
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        />
      </Box>
      
      <Box pl = {2} sx = {{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant = "h4" fontWeight = "bold" mb = {2} sx = {{color: '#0369A1'}}>
          {selectedCategory} <span style = {{color: '#0369A1'}}>
            Videos
          </span>
        </Typography>

        <Videos videos = {videos}/>
      </Box>

    </Stack>
  )
}

export default Feed