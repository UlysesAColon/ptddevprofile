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
  backgroundImage:  "linear-gradient(to right bottom, #e0f2f1, #eeeeee)",
  borderWidth:'2px',
  borderColor: '#9e9e9e',
  borderStyle: 'solid',
  color: '#616161',
  textAlign: 'center',
  opacity: 1,
  height: '400px'
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
                  <Grid item xs={2}><img className="middlebarimages" src="https://material-ui.com/static/brand.png" alt="technology"/></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://www.valuecoders.com/blog/wp-content/uploads/2018/05/featured.jpg" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://stepanoff.org/wordpress/wp-content/uploads/html5-1920x1200.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="http://moocsafrica.org/wp-content/uploads/2016/07/CSS3-badge-logo-big.png" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg" alt="technology" /></Grid>
                  <Grid item xs={2}><img className="middlebarimages" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAYFBMVEX///9h2vtU2PtT2Pv3/f/7/v9p3Pux6/30/P/w+/9v3fti2vuQ5Pzi+P6E4fzb9v7E8P2J4vyo6f133/u97v3I8f3R8/7p+f6a5vzO8v6f5/ze9v6t6v3W9P7G8f2/7v3bXndtAAANS0lEQVR4nO1d6ZqyOgweyiIgooiKyzje/10egaZtSrf5RoWep++fWaRI02ZPw9dXQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAwOuRpn8ZXXRF/qonmRXFo8rIE2W12v7D6N257EeTqF11r3+4j6KrntOgeM6ouvxmcL4q+eiIxI3X1FjxqdAJRfvCcey2IZPRq7c+7VtRyZMZdkflsrz3VjE2iq9vf+Y3QUWKgRyVTRTelJToh3pKjINmPv2Uvk0D8yrWj/z51OO/Ep0gNOOYYOYn2Uk7ENPwOTgqM2F08sE5vAo1TOZ8fz5+vj1gWRhXapujQOxBsv1pYKjNOYbbfXQWL8GGTonc2b/SnThPEt0Vwx7iFeS84Z+c4Iauimg5qOiTY17YiKJgqhVSQdySaIXZ4TIOJfv3PvjrkdBJTXZ013BqkBav8SYTSLGf8BAlb/bGx34LdkS7obcip9ynY0ZpohhIpTFR8daS0YxzqpQfCppCMCWvbMPotEztJ5MopQVDUXOFC1zE/xXrVAXdOOU7Hvh9gO2s9dW5p0Lq/qK85HtFa3oUdOf45cEfx5nV+isEOVnmX92ay1PDTMvxktvrH/iN+B4navIe0oYRIztyoWkUBqMmIY8XP+17QR96Z7xoxYUl++VoHjFcaPZmFofWSftdJt7bxmmAWjstFdm44W2Rig2mRGkzr7dWMbRAjKIwtvqURckpQVrrbbuRq+wXLggJnZ5D+LtltHBYbWrZe2WF5860uPF9sbbH/pJxX6xf8YyfAqWFff06JC+s3rjHtLA+c4FlZ2YzKD2mhY1HkkxSqaVtQOyfvHCUnUxuggVOLPLTR1pQnUrMOhWCWKRKgSqWaCbVqX45qtTWMgrDPeGbIQE7w5wao0FUr+wLcChNJvUOvJFhZjmIjtiUcr2PtGhe+7BvBo1A6ZMgLE4eZSMjMe1KDGbG0e7+Lg/ncVp6P5WrEJj6jRFHL3Gpn+pXipk+tD4YwTJJvCjjCEyjVyaUxH7FL3YW5xrkZixOC+J+ehLWMv18wM0s8C+QEMScz5SsTs6MjOVZ5qygs9LkTEFWyNzAjC+1MQ4JKM/SyzSAodYJMOV1V3RPbO/3+6b/pWBeq3pD3bzMCUCQb2ospMXtChpjPZQjxENx2vCTG+PXWzFd/YePIb6vr+tECibd6XCus2hShaXG87KsPh9OXTq5qV8qlS3hKBDy7eFcRsSRCpgiJCrPh9soP+hmM1hwiwSYlWm3G8jwaypIe6Q877pcn69eNFI6jeyPZBAJQoWJXx57j9Y8sz/AM9GZXKq1eUKD5niKx6x9oq7r/kf2FKyTKrcp1tXRm+RyemoiK2PsTtsuSWRTLE2S7nb/sQ0mUXP5U7X9h7C5rlWEGMrbz3v462C8B6tV2VetRv2Q6GrJN86Oo6pgl8RZ833pDYUz/Y8tLQRe7NNdSbvLd5PFqtu25tT1rEhWqi3RXi+gBO+uZYngzrDkdHG8KoQxiVbLlBz5Xi0lhEsyJw7pAVwi6M9cwyrLo0b6LVEC/hKsRFqg4pQmp1wilFrQkMh68j37hbmtO/yEJKouMB0W5YcCcVNAk2F6cQO3u1Tyl9n32eewwTXcpD72S0VdEpbwo5NxLEmEIBfEvGnsYthmybFGyoW0i6ng2qPnWn9TyVjg0tT7VAQYUWIeO+I4TvGdoW9dRs1nhwreW+F8R4uYRJqbFfcY0a7C2+Sr199CbTkpF3AY7ShQIq5RgdZKZJIDmUyG4mlqnm7dVABCdf0gDWiGFmcZ7rVIjdmtjW+x0l0qVRPrt1Pqn8iCM3/UUe+CxFGzk8gBRsbAFj/0D0mDisfSzOWQ78eZVyNm03JEyiS9Y0llisTXqWiTPLUjHk731RAsp4J3qo6PXG6QWT1YftxDccSB80XC1niNrrplkq2QYR8DbLMODC1l+ed+EcRgQVxSKh0l0CQPuBJnvE6YEsMFSLKCLDozDas0qzaslny+A1jMndQW9lNzq4ZtgaL5ClLItd4tbAyB21SAw2izxYVZplyf34SFBYtaXHWpVguwFqXjls4RaKKtI2bHcGaqm2flI/pK5xTPE2WAdEFAJB4b9JHBTANLbp5oKHCIMdN7FfkgFq+c1oJHivttxKuMDMDOPc7hnMAEjXYkmgtacX1sGO2eSqSFMezBdsbno390XW3nF4Qpx6Ku6XTbQpqyeJ3F118Z9O57QTnZlucVTHRkfZsOuyNRzDeG9fxh60SyNyByXASWG4iRhMdCEQNpTr4xrFIRlPTvJ/M3dK7fC8EsablMqSRccAAbw0Eo0gs/7bFuXE+1QDm0tMPl6mcRmO+Y+LWH8mgJ06eTBc60YE4F8jBTEy0wM6hdGSVGxvu4udW5nmoBO0LyUEsVEZQ8AiaKQ3wim4dHqEUZW9egZlNM1P+eAm22nP3bWvm8iV2Z6cWgws9WjsyNLWw1fht0KrpQ8MhtpYyNI81eDmogGMu3v3jWUF6vm4EWouwTM0SW6MQpVpDyI2APaTSME3GOyETVC0+kRsQYu9kGL5yueg9ApmUm9twh30pUJVrDE8nIHH1iWnHQTLN0nYLC0/5ovhbIpMKqRLcx0LZAfq7J4M9ZBGGW/CqEpqNMq8Q2ePHR9r2rNwaSkGDdZorPEDqg7Fx18yzyq/VKKLdnYGSgWOBB1VEsVjlmZEtXXSc9mQc4X/SXcUB8VhuF9NjZngUukXms0KtYJMC2aljsV/k1KQt3znj6ip0S03S4oWwQb+BQvmSzH2ViSDXTECbdsIi6agPeha4iM5YfcGI8d+dUl535YtFpSeZI1yA9I3VwhJMVFR8/Ne0KoWPXnKR4bk/e8efJCtKjUDt9cLaZFJRusK0iWhu/rmR7nqeKuHKWtEQi2B+knbso5SwkVKVOaSexZvmsiwmmm8thf7hsJqIAYnaDJobyC+SgJSsxBbmAGljRnMJtWymL0Pp4uMTVLESpZVXNQYEKxGaJf0+ACzBIxYyANXpIudDGhgrPUapFeTKXWJqziPKLAbitb1yuhrXfiizyxYtR3PofU0+L2ZrAJMPoYlUi42RJR0oK3M6WkHqXg6HFVD4Ymg4Bqi8uONkuY13t8l0tNUZdWIPorVTwS0iTyUsGu97FewL9wAUi1DTK7aEnJTALgLpzsxhxY161/Xwpc2S4pE3Uty+XecroXqselzap7QF+uv0gIdjsTDnkp73iFAZpf9V8/aO4VYqi/r5//mE7EASMaltlFQjjsQXC9lCVyvtWyz7AnB9K1eboXyjQ7I87Ny5hOfPHcd+UmkMT2cqDc2e3q+YojTCpbHKMhiNNWsUIfKfovOwtIeB+Vk5BnM26bOumul5XTzx2j/7H9Vo1dVvaDyVVJx9OFXFUtgnxpQc4jvDtCDfXBK4zdKEa/WVud/S3gJrl+2F4FcufyUDK8452dfSsrStTBUO4orismuwXTCBRIcqq1WnQGTSPvgiP9BeYtCQoto/9cLLf+Wx/f3K7+d7dePiGHmP07Y0CmpYESbfdrVo0YQT2SXs4Trs+UL/dN+FpairFii/WP8fH4bCiOByOR5ZAUmZ8aNu1GSr1/gTaF0VtGrLEsrzbWSs2tesJAdRlueg2gEuqWUHWMQmLQQgXagslvWyAYWuc16g2AHPUtZVPlY+KxNa8Op20XRNy6mutMUV5aBkH7VwxRioMvjkr2+S9XFnfSr0tRZnIr96EY6rUtJlZbTzwEWMbQ43aycJ6iwRtnGeKOkFmmYyrDCfXjNFQ0Zr1Bi6N83hb1y9BsxgrRmn+yC2SvhRQ5WeuwGUC4sprMczdjyH+u7zeBgaMeSHL+wRYD0/C0+3muB0YWx5E9zhov19LpAF3SjerkBHr/y0t5CpPu0HpY9NKR1rgc5mxc8X3/5IWYpmSi2ntMS0c5D2PETtYUF7KztZFj/QQyhWI3bROfdSprk2KUV2vveAqn+tUxF9AnWtb5ldORusriEd4aYNT38xcLlNMU68WrXrx0TejYXBjxPrOKcBTjrGRfCtLWGSR2NoXUHjT20F4uRdpDB4JZb0FVWc5AGqWtUIuF96U2UuVQjhCoZe4mQsjLQ6lWXheBBkx+iBCBbG2CRA9XOeXeQG5Ig1nJ7yGm/B33Ql9iEq1j7b3M1cEbRBUVhFU50RS4bL4ut2ziruol+rX60e4tTzd7mL1o6Q1brw8jSi8E0or7/LsUAwuh7Zuwmu4o7UsJRPx2MFaogbkn/yytHpA4icTBd1FNDRJo+AD8XgiifaCHQpnVTzLFA1gp7SpLknvuKZNE/uXKu3bFeUI1hzaq5feUbBsEImq67VqcftiUmt9TVxp35fk1HXLyhHmb0H4L9hPvA1BFpi8tqLRj/TsPbIMypLoYaltRvRWWTDbw/CSq0UjVVbLE+LSuvmipobDO1aXiunOING3Y1DqXk8qu4zvbl88cH9oQuof+xiG7hu9sWNZ/Z7/BY+W1aVVu18v6+bQQIFbs/NUVIhIN5ef3WXzz85l3t1uG3/lREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQIAP+A+F5XouSigzBQAAAABJRU5ErkJggg==" alt="technology" /></Grid>
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
          <h4>My Github <a href="https://github.com/UlysesAColon/" ><img src={Octocat} className="linkedimages" alt="github"></img></a></h4>  
          <h4>My LinkedIn <a href="https://linkedin.com/in/ulyses-colon/" ><img src={In_Blue} className="linkedimages" alt="linkedin"></img></a></h4>    
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4} >
          <h4>Current Project in Progress  <a href="https://programmedtodestroy.herokuapp.com/"><img src={PTDLLCIcon} className="linkedimages" alt="linkedin"></img></a></h4>
          <p>Contact Me: UlysesAColon@gmail.com</p>
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
