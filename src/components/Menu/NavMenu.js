import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PTDLLCIcon from '../../images/PTDLLCIcon.jpg';
import Octocat from '../../images/Octocat.jpg';
import In_Blue from '../../images/In_Blue.png';
import Profile_Photo from '../../images/Profile_Photo.jpg';

class NavMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
      
        <Button className="navmenu"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <img src={PTDLLCIcon} className="nav-logo-icon" alt="logo" /> 
        </Button>
        <Menu 
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><img src={Octocat} className="octocat" alt="github"></img> Github</MenuItem>
          <MenuItem onClick={this.handleClose}><img src={In_Blue} className="octocat" alt="linkedin"></img>LinkedIn Page</MenuItem>
          <MenuItem onClick={this.handleClose}><img src={Profile_Photo} className="octocat" alt="linkedin"></img>About</MenuItem>
        </Menu>
        Other text
      </div>
    );
  }
}

export default NavMenu;