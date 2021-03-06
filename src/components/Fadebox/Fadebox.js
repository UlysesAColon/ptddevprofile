import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { red } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    height: 180,
},
container: {
    display: 'flex',
},
paper: {
    margin: theme.spacing.unit,
    color: '#555f61'
},
svg: {
    width: 100,
    height: 100,
},
polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
},
textcolor:{
 background: red,
}    
});

class Fadebox extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <div className={classes.container}>
          <Fade in={checked}>
            <Paper elevation={4} className={classes.paper}>
              <p className={classes.textcolor}><a href="https://programmedtodestroy.herokuapp.com/">Programmed to Destroy</a></p> 
              <br />
              <p className={classes.textcolor}><a href="https://github.com/UlysesAColon/ptddevprofile">Github</a></p> 
            </Paper>
          </Fade>
        </div>
      </div>
    );
  }
}

Fadebox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fadebox);