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
import PTDLLCIcon from './images/PTDLLCIcon.jpg';
import AboutMe from './components/AboutMe/AboutMe';
import Iframe from '../node_modules/react-iframe';

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
  backgroundColor:  "black",
  borderWidth:'1px',
  borderRadius: '25px',
  borderColor: 'black',
  borderStyle: 'outset',
  color: '#fffaf1',
  textAlign: 'center',
  opacity: 1,
  '&:hover': {
    boxShadow: '.4em 0 .4em #90caf9, -.4em 0 .4em #90caf9 '
  }
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
      <br />
      <br />
      <AboutMe />
      </header>
        <div className="middlebar" >
        <h2>Technology</h2> 
        <Grid container spacing={24}>
                  <Grid item xs={2}><img className="middlebarimages" src="https://opencollective-production.s3-us-west-1.amazonaws.com/26cf1e10-8c6a-11e8-9fbe-bf2bef5835c0.png" alt="technology"/></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://cdn-images-1.medium.com/max/1200/1*Lk7YWiSeDYGd-ITVUXbBbA.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://i1.wp.com/appliedparticletechnology.com/wp-content/uploads/2016/03/css-logo.png?resize=500%2C500&ssl=1" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://img.icons8.com/color/420/mongodb.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="technology" /></Grid>
        </Grid>
        </div>
        <div className="secondbackground">
        <Grid container spacing={24}>
        <Grid item xs={4} />
          <Grid item xs={4}>
          <div className={classes.goldborder}>
            Some Previous Projects
            </div>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={2} />
          <Grid item xs={4}>
          <Iframe  url="https://ulysesacolon.github.io/ThisDay/"
          width="550px"
          height="550px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
          </Grid> 
          <Grid item xs={4}>
          <Iframe  url="https://programmedtodestroy.herokuapp.com/"
          width="550px"
          height="550px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <br />
        </div>
        <div className="footer">
        <Grid container spacing={24} >
          <Grid item xs={4}>
          <h4>My Github <a href="https://github.com/UlysesAColon/" ><img src={Octocat} className="linkedimages" alt="github"></img></a></h4>  
          <h4>My LinkedIn <a href="https://linkedin.com/in/ulyses-colon/" ><img src={In_Blue} className="linkedimages" alt="linkedin"></img></a></h4>    
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4} >
          <h4>Current Project in Progress  <a href="https://programmedtodestroy.herokuapp.com/"><img src={PTDLLCIcon} className="linkedimages" alt="linkedin"></img></a></h4>
          <p>Contact Me => UlysesAColon@gmail.com</p>
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
