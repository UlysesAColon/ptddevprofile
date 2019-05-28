import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { List, ListItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Growbox from './components/Growbox/Growbox';
import Face_Photo from './images/Face_Photo.jpg';
import Octocat from './images/Octocat.jpg';
import In_Blue from './images/In_Blue.png';

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
  backgroundImage:  "linear-gradient(to right bottom, #e0f2f1, #eeeeee)",
  borderWidth:'2px',
  borderColor: '#9e9e9e',
  borderStyle: 'solid',
  color: '#616161',
  textAlign: 'center',
  opacity: .8
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



class App extends React.Component{
  render() {
    const { classes } = this.props;
    const list = [ "Mongodb", "Node.js", "HTML", "CSS", "Express", "React"];
    const list2 = ["Cooking", "Puzzle Solving", "Crosswords", "Reading", "Miniature Wargaming", "Professional Sports"]
    console.log(list);
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <br />
        <br />
        <Grid container spacing={24}>
        <Grid item xs={2} />
        <Grid item xs={8} >
          <div className={classes.goldborder}>
          <br />
            <img src={Face_Photo} alt="face" className="facephoto" />
            <br />
            Hello, I am Ulyses Colon.
            <br />
            Full Stack Web Developer.
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
      </header>
        <div className="middlebar" > 
        <Grid container spacing={24}>
                  <Grid item xs={2}><img className="middlebarimages" src="https://material-ui.com/static/brand.png" alt="technology"/></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://d1q6f0aelx0por.cloudfront.net/product-logos/a8957077-bbcd-41cc-b6d0-2924a1492e99-node.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://stepanoff.org/wordpress/wp-content/uploads/html5-1920x1200.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="http://moocsafrica.org/wp-content/uploads/2016/07/CSS3-badge-logo-big.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://codecondo.com/wp-content/uploads/2017/09/ExpressJS.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" alt="technology" /></Grid>
        </Grid>
        </div>
        <div className="secondbackground">
        <Grid container spacing={24}>
          <Grid item xs={6} >
          <Paper className={classes.goldborder}> 
          <h4>Skills</h4>
                <List
                align='center'>
                {
                  list.map((item, i) => (
                <ListItem className={classes.listitems}
                justifyContent='center'
                title={item} >
                {item}
                </ListItem>
                  ))
                  }
                </List></Paper>
                </Grid>
                <Grid item xs={6} >
          <Paper className={classes.goldborder}> 
          <h4>Interests</h4>
                <div>
                <List
                align='center'>
                {
                  list2.map((item, i) => (
                <ListItem className={classes.listitems}
                justifyContent='center'
                title={item} >
                {item}
                </ListItem>
                  ))
                  }
                </List>
                </div></Paper>
                </Grid>
                </Grid>
        </div>
        <div className="footer">
        <Grid container spacing={24} >
          <Grid item xs={4}>
          <a href="https://github.com/UlysesAColon/" ><img src={Octocat} className="linkedimages" alt="github"></img></a>  
          <a href="https://linkedin.com/in/ulyses-colon/" ><img src={In_Blue} className="linkedimages" alt="linkedin"></img></a>    
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4} >

          </Grid>
         </Grid>
        </div>
    </div>
  );
}}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
