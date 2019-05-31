import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Profile_photo from '../../images/Profile_Photo.jpg';
import Smiling_Photo from '../../images/Smiling_Photo.jpg';
import Chef_Photo from '../../images/Chef_Photo.jpg';
import { Zoom } from '@material-ui/core';

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
  overflowX: 'hidden',
  overflowY: 'auto',
  maxHeight: '800px',
  '&:hover': {
    '&:hover': {
      boxShadow: '.4em 0 .4em #90caf9, -.4em 0 .4em #90caf9 '
    }
  }
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
          <Zoom in={checked}>
             <div>
              <Grid item xs={12}>
              <div className="scrollhider">
              <br />
                <p className={classes.goldborder}>
                <br />
                I am an inquisitive developer who used to be in the culinary world. Now I design websites and applications for myself and those who are interested in my skills. 
                <p />
                After 8 years in the Culinary industry as a Sous Chef I found that I loved to work my mind as well as my tastebuds. I began to search out new and interesting challenges and fell into the deep and passionate world on web development. I quickly discovered that each new language and library was like a cuisine. Each is rich with new techniques and skills to explore. Currently I am in the rabilt hole that is React and loving it!
                <p />
                <p>
                  The satisfaction of a job well done and a team you can build trust and comradierie with are important to the functional success on any project. I love to make friends, encounter and surmount new obstacles, as well as get out of my comfort zone. The thrill of a goal completed and a new skill learned are what drives me towards a process of continued improvement.
                </p>
                <p>
                  Check out below some of my interests and hobbies, and if you think you would like me to be a part fo your team please reach out to me. Im always happy for a chat and to meet new people.
                </p>
                <p>
                  Best,
                </p>
                <p>
                  Ulyses Colon
                </p>
                <div>
                <Grid container spacing={24} >
                <Grid item xs={4} >
                <img src={Smiling_Photo} alt="profilephoto" className="aboutmephoto" /></Grid>
                <Grid item xs={4} >
                <img src={Chef_Photo} alt="profilephoto" className="aboutmephoto" /></Grid>
                </Grid>
                </div>
                <br />
                </p>
                </div>
                </Grid>
                <Grid item xs={6}>
                </Grid>
              </div>
          </Zoom>
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