import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Paper from '@material-ui/core/Paper';
import { List, ListItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
    const list = ["Javascript", "Mongodb", "Node.js", "HTML", "CSS", "Express", "React"];
    const list2 = ["Cooking", "Puzzle Solving", "Crosswords", "Reading", "Miniature Wargaming", "Professional Sports"]
    console.log(list);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <br />
        <br />
        <br />
        About Me:
        <Grid container spacing={24}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        PROFILE
I am a recent Coding bootcamp graduate breaking in to the development field. After 8 years in the Culinary industry as a Sous Chef I am applying my discipline, organization, and structural solution problems towards my skills in coding. I am comfortable in high pressure environments as well as aware that a need to produce is paramount to the success of a team.
I know that hard work, perseverance, grit and creative problem-solving skills will solve the toughest of issues.
POINTS OF NOTE
I interned with the Walt Disney corporation at the Grand Floridian resort. Through my time at Disney University I learned how an engineer focused and efficient team can coordinate and execute on large tasks and systems. 

I believe that teamwork and communication are paramount for a high functioning team to succeed.
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <h4>Skills to show papi</h4>
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
        <Grid item xs={3} />
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <h4>Interests</h4>
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
                </List></Paper>
        </Grid>
       <Grid item xs={3} />
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
        <div>
        </div>
      </header>
    </div>
  );
}}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
