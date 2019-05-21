import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
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

class Growbox extends React.Component {
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
          <Grow in={checked}>
            <Paper elevation={4} className={classes.paper}>
             <div>
             <h1>PROFILE</h1>
                <p>I am a recent Coding bootcamp graduate breaking in to the development field. After 8 years in the Culinary industry as a Sous Chef I am applying my discipline, organization, and structural solution problems towards my skills in coding. I am comfortable in high pressure environments as well as aware that a need to produce is paramount to the success of a team.
                I know that hard work, perseverance, grit and creative problem-solving skills will solve the toughest of issues.
                <h4>POINTS OF NOTE</h4>
                I interned with the Walt Disney corporation at the Grand Floridian resort. Through my time at Disney University I learned how an engineer focused and efficient team can coordinate and execute on large tasks and systems. 
                <h4>Internal Mantra</h4>
                I believe that teamwork and communication are paramount for a high functioning team to succeed.

                <h4>INTERESTS</h4>
                <ol>
                    <li>Puzzle Games</li>
                    <li>Great Food</li>
                    <li>Fluency in Spanish</li>
                    <li>Reading</li>
                    <li>Professional Sports</li>
                    <li>Python</li>
                    <li>Yoga</li>
                </ol>
                
</p>
</div>
            </Paper>
          </Grow>
        </div>
      </div>
    );
  }
}

Growbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Growbox);