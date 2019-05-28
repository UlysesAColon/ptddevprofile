import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Profile_photo from '../../images/Profile_Photo.jpg';
import Smiling_Photo from '../../images/Smiling_Photo.jpg';
import Chef_Photo from '../../images/Chef_Photo.jpg';

const styles = theme => ({
  root: {
    height: 180,
    
},
container: {
    display: 'flex',
},
paper: {
  margin: theme.spacing.unit,
  backgroundImage:  "linear-gradient(to right bottom, #e0f2f1, #eeeeee)",
  borderWidth:'2px',
  borderColor: '#9e9e9e',
  borderStyle: 'solid',
  color: '#616161',
  textAlign: 'center',
},
polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
},
textcolor:{
 background: red,
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
    
    return (
      <div>
      <Grid container className={classes.root} spacing={24}>
      <div className={classes.root}>
        <Switch className="switchbutton" checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <div className={classes.container}>
          <Grow in={checked}>
             <div>
              <Grid item xs={12}>
                <p className={classes.paper}>
                I am a recent Rutgers Coding bootcamp graduate breaking in to the web development field.
                <p />
                After 8 years in the Culinary industry as a Sous Chef I am applying my discipline, organization, and structural solution problems towards my skills in coding. I am comfortable in high pressure environments as well as aware that a need to produce is paramount to the success of a team.
                I know that hard work, perseverance, grit and creative problem-solving skills will solve the toughest of issues.
                <p />
                <div>
                <Grid container spacing={24} >
                <Grid item xs={4} >
                <img src={Profile_photo} alt="profilephoto" className="aboutmephoto" /></Grid>
                <Grid item xs={4} >
                <img src={Smiling_Photo} alt="profilephoto" className="aboutmephoto" /></Grid>
                <Grid item xs={4} >
                <img src={Chef_Photo} alt="profilephoto" className="aboutmephoto" /></Grid>
                </Grid>
                </div>
                </p>
                </Grid>
                <Grid item xs={6}>
                </Grid>
              </div>
          </Grow>
        </div>
      </div>
      </Grid>
      </div>
    );
  }
}

Growbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Growbox);