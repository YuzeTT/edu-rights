import React from 'react'
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

function HomeCard() {
  return (
    <div>
      <Card elevation={0} sx={{backgroundColor: blue.A400, color: 'white'}}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <div>
              <Typography variant="h5" component="div">
                学生权益维护中心
              </Typography>
              <Typography sx={{mt:1}}>
                维护权益，勇于监督，勇于投诉。
              </Typography>
            </div>
            <LocalPoliceIcon fontSize="large"/>
          </Stack>
          
          {/* <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          <Box sx={{mt:2,textAlign: 'center'}}>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              spacing={2}
              alignItems="center"
            >
              <div>
                <Typography variant="h6">当前热点</Typography>
                <Typography variant="h5">双减</Typography>
              </div>
              <div>
                <Typography variant="h6">热门举报</Typography>
                <Typography variant="h5">作业量</Typography>
              </div>
            </Stack>
          </Box>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  )
}

export default HomeCard