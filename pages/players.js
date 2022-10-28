import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default class FetchData extends React.Component {
    state = {
      loading: true,
      player: [],
      position: []
    }
      
    async componentDidMount () {
      const url = "https://manutd-players.herokuapp.com/players"
      const response = await fetch(url)
      const data = await response.json()
  
      const {
        players = [],
        positionList = players.slice(0,4).map(item => item.position).flat(),
        memberList = players.slice(0,4).map(item => item.members).flat(),
      } = data
  
      this.setState({player: memberList, position: positionList, loading: false})
    }
    
    render() {

      if (this.state.loading) {
          return <div>loading...</div>
      }
    
      if (!this.state.player.length) {
          return <div>Did not get any player</div>
      }
    
      return (
          <div>
              <h1>Manchester United Players</h1>
              {this.state.position.map((place, index) => {
                return (
                  <Grid key={index}>
                    <h1>{place}s</h1>
                    <Grid container spacing={2} style={{paddingTop: "20px", paddingLeft: "50px", paddingRight: "50px"}}>
                      {this.state.player.map((item, key) => {
                        if (place === item.position) {
                          return (
                            <Grid item xs={3} key={key}>
                              <Card>
                                <CardMedia image={'https://' + item.image} style={{ width: "250px", height: "300px", margin: "auto" }} />
                                <CardContent>
                                  <Typography><b>{item.name}</b></Typography>
                                  <Typography><b>Position:</b> {item.position}</Typography>
                                  <Typography><b>Jersey No:</b> {item.jersey}</Typography>
                                  <Typography><b>Country:</b> {item.country}</Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          )
                        }
                      })}
                    </Grid>
                  </Grid>
                )
              })}
              
          </div>
      )
    }
}