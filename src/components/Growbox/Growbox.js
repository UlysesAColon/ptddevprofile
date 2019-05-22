import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { red } from '@material-ui/core/colors';
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
    textAlign: 'center'
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
},
listitems:{
  fontSize: 12,
  alignItems: 'center',
},    
});

let itemIndex = 0
class Growbox extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  toggleMenu(){
    this.setState({
      visibleItems: itemIndex
    })
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    const list = ["Javascript", "Mongodb", "Node.js", "HTML", "CSS", "Express", "React"];
    const list2 = ["Cooking", "Puzzle Solving", "Crosswords", "Reading", "Miniature Wargaming", "Professional Sports"]
    console.log(list);
    
    return (
      <Grid container className={classes.root} spacing={24}>
      <div className={classes.root}>
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <div className={classes.container}>
          <Grow in={checked}>
            <Paper elevation={4} className={classes.paper}>
             <div>
              <Grid item xs={12}>
             <h1>PROFILE</h1>
                <p>I am a recent Coding bootcamp graduate breaking in to the development field. After 8 years in the Culinary industry as a Sous Chef I am applying my discipline, organization, and structural solution problems towards my skills in coding. I am comfortable in high pressure environments as well as aware that a need to produce is paramount to the success of a team.
                I know that hard work, perseverance, grit and creative problem-solving skills will solve the toughest of issues.
                <h4>POINTS OF NOTE</h4>
                I interned with the Walt Disney corporation at the Grand Floridian resort. Through my time at Disney University I learned how an engineer focused and efficient team can coordinate and execute on large tasks and systems. 
                <h4>Internal Mantra</h4>
                The need for constant self-improvement is the key to success.
                </p>
                </Grid>
                <Grid item xs={6}>
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
                </List>
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
                </List>
                </Grid>
              </div>
            </Paper>
          </Grow>
        </div>
      </div>
      </Grid>
    );
  }
}

Growbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Growbox);