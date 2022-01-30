import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction color="red" label="Github" value="recents" href="https://github.com/NicholasL1/StayFit-WebApp" target='_blank' rel="noopener noreferrer" icon={<GitHubIcon  style={{fill: "#3b5998"}}/>} />
          <BottomNavigationAction label="Twitter" value="favorites" href="https://www.linkedin.com/in/nicholas-lachhman-a52b9120a/" target='_blank' rel="noopener noreferrer" icon={<LinkedInIcon  style={{fill: "#1DA1F2"}}/>} />
        </BottomNavigation>
)
}

export default Footer
