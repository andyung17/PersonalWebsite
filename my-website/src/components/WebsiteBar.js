import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import CoPresentIcon from '@mui/icons-material/CoPresent';

import React from 'react'

const WebsiteBar = () => {
  return (
    <AppBar position='static'>
    <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label="logo">
          <CoPresentIcon ></CoPresentIcon>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          My Website
        </Typography>
        <Stack direction='row' spacing={2}>
            <Button color="inherit">About me</Button>
            <Button color="inherit">Work experience</Button>
            <Button color="inherit">Projects</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default WebsiteBar