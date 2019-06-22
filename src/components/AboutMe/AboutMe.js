import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Growbox from '../Growbox/Growbox';
import Face_Photo from '../../images/Face_Photo.jpg';



const styles = theme => ({
    root: {
      height: 180,
      
  },
  container: {
      display: 'flex',
  },
  paper: {
      margin: theme.spacing.unit,
      color: '#555f61',
      textAlign: 'center',
      opacity: .8
  },
  goldborder: {
    margin: theme.spacing.unit,
    backgroundColor:  "#555f61",
    borderWidth:'1px',
    borderRadius: '25px',
    borderColor: 'black',
    borderStyle: 'outset',
    color: '#fffaf1',
    textAlign: 'center',
    opacity: .9,
    height: '400px',
    // '&:hover': {
    //   boxShadow: '.4em 0 .4em #818f9b, -.4em 0 .4em #818f9b '
    // }
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
  listitems:{
    fontSize: 16,
    alignItems: 'center',
  },    
  });


class AboutMe extends React.Component {
    render() {
    const { classes } = this.props;
    return (
        <div>
             <Grid container spacing={12}>
        <Grid item xs={2} />
        <Grid item xs={2} />
        <Grid item xs={4} >
          <div className={classes.goldborder}>
          <br />
            <img src={Face_Photo} alt="face" className="facephoto" />
            <br />
            Hello, I am Ulyses Colon
            <br />
            Full Stack Web Developer  
          <h4>About Me:</h4>
        <Growbox />
          </div>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} /> 
        {/* Left Side */}
        <Grid item xs={8}>
        <Grid item xs={12}>
       
        </Grid>
          <div>
          </div>
        </Grid>
        <Grid item xs={2} />
        {/* Right Side */}
      </Grid>
        </div>
    );
}}
AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AboutMe);