
import React from 'react';
import './App.css';
import Person from './Component/Person';

class  App extends React.Component {
constructor(){
  super();
this.state = {
  intervall:null,
  timer:0,
  index:0,

 Person:[
  {
    name:'Joe Snoe',
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_baYFnrbapbG4SDvISPkBnen3OXsHCMQ0NJnEX_1FFCwFvY2OcRFdCbQArYYrb8icfY&usqp=CAU",
    bio:"Jon Snow est un personnage fictif de la série de livres Le Trône"
  },
  {
    name:'Al Pacino',
    imgUrl:"https://aws.vdkimg.com/artist/1/6/5/4/16543_photo_scale_160x200.jpg",
  bio:'acteur de film'},
    {
    name:'brad pitt',
    imgUrl:"https://anniversaire-celebrite.com/upload/250x333/brad-pitt-250.jpg",
      bio:'acteur de film'
  },
  {
    name:'Diego Maradona',
    imgUrl:"https://lyricstranslate.com/files/styles/large/public/maradona.jpg?itok=LytGKAY2",
    bio :'footbaleur'
  }


 ]
};
}
componentDidMount(){
  console.log('componentDidMount()')
  this.setState({
    intervall : setInterval(()=>{
      this.setState({timer:this.state.timer + 1})
    },1000)
  })
}
componentWillUnmount(){
  console.log('componentWillUnmount()')
  clearInterval(this.state.intervall)
}
render (){
    return(
    <div className="App">
      <header className="App-header">
        <div>
      {/* <button>{this.state.Person[0].name}</button>
      <button>{this.state.Person[1].name}</button>
      <button>{this.state.Person[2].name}</button>
      <button>{this.state.Person[3].name}</button> */}
     {this.state.Person.map((Element,currentindex)=><button onClick={()=>this.setState({
       index:currentindex}
     )}>{Element.name}</button>)}

        </div>


    <Person name={this.state.Person[this.state.index].name} imgUrl={this.state.Person[this.state.index].imgUrl} bio={this.state.Person[this.state.index].bio}/>
   <h2>{this.state.timer}</h2> 
   </header> 
  
    </div>
    );
  }
}

export default App;
