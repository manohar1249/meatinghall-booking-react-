import {React,useState} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router, 
   Route,
   Link ,
   useParams,
   useHistory,
   
   Switch
  } from "react-router-dom";
 
  let hall = [{name:"manohar",date:"2020-12-12",venue:"Radix"}];
  const App = ()=>{
    const h = useHistory();
    console.log(h);
    const historyy = useHistory();
    return(
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>
                 
              <center><h1>Welcome To Manohar Convention</h1></center>
              <center><p>click button to go Booking Page</p></center>
              <a href="/book">BookingHall</a>
            </div>
          </Route>
          <Route path="/book" exact component={Bookhall}>
            <Bookhall />
          </Route>
        </Switch>
      </Router>
    )
     
  }

const Bookhall = (props)=>{
  console.log(props);
  const [hallstatus,setStatus] = useState();
  const [events,setEvents] = useState([]);
  let res;
  const book = ()=>{
   // console.log(hall);
   let name =document.getElementById('name').value;
    let date =document.getElementById('date').value;
    let venue = document.getElementById('venue').value;
    console.log(typeof(date),venue)
    let counter =0;
     hall.forEach((ele,ind) => {
        if(ele.date==date && ele.venue==venue){
          console.log('hall unavilable')
          counter =1;
          setStatus('hall unavilable')
          //return ind;
        }
        /*else if(ele.date!=date && ele.venue==venue){
            let a = {"name":name,
            "date":date,
            "venue":venue}
            let res = hall.push(a);
            console.log(hall)
            setStatus('hall is booked');
            //setEvents(res);
            return ind;
        }*/
    });
    if(counter==0){
      let a = {"name":name,
            "date":date,
            "venue":venue}
            hall.push(a);
            console.log(hall)
            setStatus('hall is booked');
    }
    if(counter==1){
      counter=0;
    }
    //console.log(str);
  }
  const getEvents =()=>{
    res = [...hall];
    console.log(res);
    setEvents(res);
  }
  return (
    <div id = "bookhall">
      <lable>Customer name<input type="text" id="name" /></lable><br /><br />
      <lable>Booking Date<input type="text" id="date" placeholder="yyyy-mm-dd"/></lable><br /><br />
      <lable>Select Venue<select id="venue">
          <option value="Radix">Radix</option>
          <option value="mantra">Mantra</option>
          <option value="shubam">Shubam</option>
        </select></lable><br /><br />
        <button onClick={book}>Bookhall</button><button onClick={getEvents}>gGetEvents</button>
        <div>
            <p><u>YOUR HALL STATUS</u></p>
            <h1>{hallstatus}</h1>
        </div>
        <br />
        <br />
        {
          events.map((ele,ind)=>{
                return (
                  <div>
                    <h2>{ele.name}</h2>
                <h3>{ele.date}</h3>
                <h3>{ele.venue}</h3>
                  </div>
                )
          })
        }
            
        
    </div>
  )
}



ReactDOM.render(
 
    <App />,
 
  document.getElementById('root')
);


