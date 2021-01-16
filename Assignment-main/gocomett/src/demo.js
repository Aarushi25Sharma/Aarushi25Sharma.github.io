import React from 'react';
import './index.css'
import ReactDom from 'react-dom';
import Sliders from './sliders.png'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Pagination from '@material-ui/lab/Pagination';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';


const marks = [
  {
    name: 2,
    value: 2,
    label: '2 min reads',
  },

  {
    value: 100,
    label: '50 min reads',
  },
];

function valuetext(value) {
  return `${value} miles`;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  
 
}));


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



 
const Faci = ()=>{

      const [selectedValue, setSelectedValue] = React.useState('a');
      const handleChange1 = (event) => {
        setSelectedValue(event.target.value);
      };

    const onClick = (event) => {
      setSelectedValue(event.target.value);
    };
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 5,
      },
      menuButton: {
        marginRight: theme.spacing(5),
      },
    }));


      const classes = useStyles();

  
      const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
 

    return(
            <div>
                <Container style={{width: "60rem"}}>
                    <form>
                      <Grid container>
                       <Grid item xs={4}>
                       <Paper component="form" className={classes.root}>
                        <InputBase 
                          className={classes.input}
                          placeholder="Search tags here"
                          inputProps={{ 'aria-label': 'search tags here' }}
                         />
                         <IconButton type="submit" className={classes.iconButton} aria-label="search">
                          <SearchIcon />
                          </IconButton>
                        </Paper>
                       </Grid>

                       <Grid item xs={4}>
                        <p className="sort" >Sort by </p>

                        <div className="basic-select">
                          <select className="arrow">
                             <option value=" ">Sort by</option>
                             <option value="one">Alphabet</option>
                             <option value="two">Latest</option>
                             <option value="three">Mostly viewed</option>
                             <option value="four">Min read</option>
                          </select>
                        </div>
                       </Grid>
                      </Grid>
                      <div>
                         <p className="job"> 10 blogs for you</p>
                         <Pagination className="page" count={3} />
                      </div>
                      <Grid container>
                       <Grid item xs={7}>
                         <Card className="doc">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 1 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: Swaroop R</p>
                               <p className="dou">Title: Introduction to PYSHARK</p>
                               <p className="dou">Details: 21 Aug, 2 min read</p>
                               <p className="dou">Blog:This article outlined the introduction to the Pyshark and basic of the Pyshark in a short, relevant and focused manner.</p>
                               <p className="dou">Tags: Cybersecurity, Python, Pyshark, Packet Sniffing, Wireshark</p>
                               <p className="dou">Responses: Nice article about Pyshark. by Slakshmi</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 2 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: David Wells</p>
                               <p className="dou">Title: PsExec Local Privilege Escalation</p>
                               <p className="dou">Details: 9 Dec, 4 min read</p>
                               <p className="dou">Blog:There has been a new PsExec version released in 2021 (v2.30)</p>
                               <p className="dou">Tags: Windows, Hacking, Reverse Engineering, Infosec, Cybersecurityk</p>
                               <p className="dou">Responses: Cool idea and it actually works. by Fbarbrody</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 3 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: David Wells</p>
                               <p className="dou">Title: Android MX Player — Path Traversal to Code Execution</p>
                               <p className="dou">Details: 9 Jul, 5 min read</p>
                               <p className="dou">Blog:During disclosure with MX Player, we received very little</p>
                               <p className="dou">Tags: Hacking, Android, 0day, Cybersecurity, Tenable Research</p>
                               <p className="dou">Responses: No responses</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 4 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: Chris Lyne</p>
                               <p className="dou">Title: Examining a Phishing Vector in Plex Media ServerK</p>
                               <p className="dou">Details: 16 Jun, 5 min read</p>
                               <p className="dou">Blog: I recently disclosed CVE-2020–5740 and CVE-2020–5741</p>
                               <p className="dou">Tags: Cybersecurity, Streaming, Vulnerability, Information Security, Tenable Research</p>
                               <p className="dou">Responses: No responses</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 5 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: Jacob Baines</p>
                               <p className="dou">Title: Pi Sniffer’s Travels</p>
                               <p className="dou">Details: 16 Apr, 9 min read</p>
                               <p className="dou">Blog: The author gives account of himself and the Pi Sniffer.</p>
                               <p className="dou">Tags:  Information Security, Cybersecurity, Hacking, Raspberry Pi, Tenable Research</p>
                               <p className="dou">Responses: Thanks for the story. I just built the pi-sniffer by Walts</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 6 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: Robert Kopack</p>
                               <p className="dou">Title: Tenable.sc API Key Usage</p>
                               <p className="dou">Details: 16 Jan, 9 min read</p>
                               <p className="dou">Blog:TIn Tenable.sc 5.13.0 users will be able to authenticate to the system by using an API Key.</p>
                               <p className="dou">Tags: API, Tenable, Cybersecurity</p>
                               <p className="dou">Responses: No responses</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 7 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: Jacob Baines</p>
                               <p className="dou">Title:Winbox in the WildK</p>
                               <p className="dou">Details: 12 Dec, 7 min read</p>
                               <p className="dou">Blog: I’ve written, ad nauseam, about MikroTik routers.</p>
                               <p className="dou">Tags: Hacking, Infosec, Bug Bounty, Mikrotik, Cybersecurity</p>
                               <p className="dou">Responses: This is an awesome technical article by Ronald Bartels</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 8 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: james Sebree</p>
                               <p className="dou">Title: Trumping Physical Security with Software Insecurity</p>
                               <p className="dou">Details: 14 Jan, 5 min read</p>
                               <p className="dou">Blog: Identicard has responded to BleepingComputer stating that updates are in progress</p>
                               <p className="dou">Tags: Vulnerability, Vulnerability Research, Hacking, Cybersecurity, Infosec</p>
                               <p className="dou">Responses: Nice work and very amusing. by Mark Seiden</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 9 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator:  David Hartman</p>
                               <p className="dou">Title: The Challenges of Industrial Device Detection</p>
                               <p className="dou">Details: 17 Oct, 6 min read</p>
                               <p className="dou">Blog: Modbus/TCP is but a single ICS protocol.</p>
                               <p className="dou">Tags: Industrial Controls, Cybersecurity</p>
                               <p className="dou">Responses: Helpful article by Salmanraied</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Card className="card">
                           <CardContent>
                           <div>
                             <h2 className="h2"> Blog 10 </h2>
                          </div>
                            
                             <div>
                               
                               <p className="dou">Creator: Chris Lyne</p>
                               <p className="dou">Title: HPE iMC — Hunting the Hunted</p>
                               <p className="dou">Details: 10 Oct, 15 min read</p>
                               <p className="dou">Blog: Tenable Research has discovered several security vulnerabilities</p>
                               <p className="dou">Tags: Reverse Engineering, Vulnerability, Hacking, Cybersecurity, Information Security</p>
                               <p className="dou">Responses: No response</p>

                             </div> 
                           </CardContent>
                         </Card>

                         <Pagination className="page1" count={3} />
                       </Grid>
                       <Grid item xs={5}>
                       <div className="filter">
                       <div>
                         <img src={Sliders} alt="Sliders" className="Sliders"></img>
                       </div>
                         <p className="po">Filters </p>

                       <Button onClick={onClick}
                       onChange={handleChange1}
                       className="pa"> Reset Filters

                       </Button>

                       
                       <div>
                      
                       
                       <p className="h4"> Blog type </p>
                       <div>
                       <FormControlLabel
                         control={
                          <Checkbox
                           checked={state.checkedA}
                           onChange={handleChange}
                           name="checkedA"
                           color="primary"
                          />
                         }
                         label="Education"
                       />
                       </div>
                       <div>
                       <FormControlLabel
                         control={
                          <Checkbox
                           checked={state.checkedB}
                           onChange={handleChange}
                           name="checkedB"
                           color="primary"
                          />
                         }
                         label="News"
                       />
                       </div>

                       <div>
                       <FormControlLabel
                         control={
                          <Checkbox
                           checked={state.checkedF}
                           onChange={handleChange}
                           name="checkedF"
                           color="primary"
                          />
                         }
                         label="Technology"
                       />
                       </div>
                       <div>
                       <FormControlLabel
                         control={
                          <Checkbox
                           checked={state.checkedG}
                           onChange={handleChange}
                           name="checkedG"
                           color="primary"
                          />
                         }
                         label="Economics"
                       />
                       </div>
                       </div>
                       <p className="h4"> min read </p>
                       <Typography id="continuous-slider" gutterBottom>

                      </Typography>
                      <Slider

                        getAriaValueText={valuetext}
                        aria-labelledby="continuous-slider"
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                      />

                     </div>
                       </Grid>
                      </Grid>
                    </form>
                </Container>
                
            </div>


    );
};


export default Faci;