import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PTDLLCIcon from '../../images/PTDLLCIcon.jpg';
import Octocat from '../../images/Octocat.jpg';
import In_Blue from '../../images/In_Blue.png';
import Profile_Photo from '../../images/Profile_Photo.jpg';

const styles = theme => ({
  navmenu: {
    background: 'linear-gradient(to right bottom, #78909c, #b0bec5, #cfd8dc, #b0bec5, #78909c)'
    //  #cfd8dc, #b0bec5, #90a4ae
  },
  navbutton: {
    opacity: 1
  }
});
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
    const { classes } = this.props;
    return (
      <div className={classes.navmenu}  >
        <Button className={classes.navbutton}
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
      </div>
    );
  }
}
NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMenu);