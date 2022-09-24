import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AdjustIcon from '@mui/icons-material/Adjust';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const links = [
  [
    {
      name: '教育部官网',
      describe: '查看权威文件',
      icon: <AccountBalanceIcon />,
      type: 'a',
      link: 'https://www.moe.gov.cn/',
    },
    {
      name: '聚焦“双减”',
      describe: '查看“双减”相关文件',
      icon: <AdjustIcon />,
      type: 'a',
      link: 'https://www.moe.gov.cn/jyb_xwfb/moe_2082/2021/2021_zl53/',
    },
    {
      name: '投诉举报（不推荐）',
      describe: '直达教育局，支持实名/匿名投诉',
      icon: <GppMaybeOutlinedIcon />,
      type: 'a',
      link: 'https://hudong.moe.gov.cn/zxjb/jbxz.jsp',
    },
    {
      name: '部长信箱',
      describe: '直达教育部部长',
      icon: <EmailOutlinedIcon />,
      type: 'a',
      link: 'https://hudong.moe.gov.cn/bzxx/',
    },
  ],
  [
    {
      name: '福建省人民政府（推荐）',
      describe: '12345便民平台，投诉学校违规请选择此项',
      icon: <FeedbackOutlinedIcon />,
      type: 'a',
      link: 'https://www.fujian.gov.cn/hdjl/zxts/wyts/',
    },
  ]
]

function HomeContainer() {
  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper',borderRadius: 1 }}>
        <Alert severity="info" sx={{borderRadius: 0}}>
          <AlertTitle>温馨提示</AlertTitle>
          投诉学校违规优先选择 <strong>12345便民平台</strong>。
        </Alert>
        <List>
          {
            links[0].map((item:any,i:any)=>{
              return (
                <ListItem disablePadding key={i}>
                  <ListItemButton component="a" target="_blank" href={item.link}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} secondary={item.describe} />
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
        <Divider />
        <List subheader={<ListSubheader>12345便民平台</ListSubheader>}>
          {
            links[1].map((item:any,i:any)=>{
              return (
                <ListItem disablePadding key={i}>
                  <ListItemButton component="a" target="_blank" href={item.link}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} secondary={item.describe} />
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
      </Box>
    </div>
  )
}

export default HomeContainer