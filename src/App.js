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
  backgroundImage:  "linear-gradient(to right bottom,  #1976d2,#1565c0)",
  borderWidth:'1px',
  borderRadius: '25px',
  borderColor: '#fee101',
  borderStyle: 'outset',
  color: '#fffaf1',
  textAlign: 'center',
  opacity: 1,
  height: '400px',
  '&:hover': {
    color: 'white'
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
        <Grid container spacing={24}>
        <Grid item xs={2} />
        <Grid item xs={8} >
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
          <Grid item xs={2} />
          <Grid item xs={8}>
          <h1>THis is placeholder</h1>
          </Grid> 
          <Grid item xs={2} />
        </Grid>
        {/* <Grid container spacing={24}>
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
                </Grid> */}
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
