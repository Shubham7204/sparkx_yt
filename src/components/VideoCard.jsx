import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{width: {xs: '100%', sm: '358px', md: '300px'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
				<CardMedia
					image = {snippet?.thumbnails?.high?.url}
					alt = {snippet?.title}
					sx = {{ width: {
						xs: '100%', sm: '358px', md: '320px' 
					}, height: 180 }}
				/>
			</Link>
			<CardMedia sx = {{backgroundColor: '#F1FAFF', height: '106px'}}>
				<Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
					<Typography variant='subtitle1' fontWeight='bold' color='gray'>
						{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoVideoUrl}>
					<Typography variant='subtitle2' fontWeight='light' color='gray'>
						{snippet?.channelTitle || demoChannelTitle}
						<CheckCircle sx = {{fontSize: 12, color: 'gray', ml: '5px'}} />
					</Typography>
				</Link>
			</CardMedia>
    </Card>
  )
}

export default VideoCard
