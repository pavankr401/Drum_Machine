import React from 'react';
import './App.css';
import Heater1 from './Audio/Heater-1.mp3';
import Heater2 from './Audio/Heater-2.mp3';
import Heater3 from './Audio/Heater-3.mp3';
import Heater4 from './Audio/Heater-4.mp3';
import Clap from './Audio/Clap.mp3';
import OpenHH from './Audio/Open-HH.mp3';
import Kick_n_Hat from './Audio/Kick_n_Hat.mp3';
import Kick from './Audio/Kick.mp3';
import ClosedHH from './Audio/Closed-HH.mp3';
import chord1 from './Audio/D3.mp3';
import chord2 from './Audio/D4.mp3';
import chord3 from './Audio/D5.mp3';
import chord4 from './Audio/D6.mp3';


function playSound(input, power, bank, soundName, backUpSound){
  let x = document.getElementById(input);
    if(power){
      x.volume = document.getElementById("range").value / 100;
      x.currentTime = 0;
      x.play();
    }
    if(bank){
      document.getElementById("set-song-name").innerHTML = soundName;
    }
    else{
      document.getElementById("set-song-name").innerHTML = backUpSound;
    }
}

class drumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      bank: false,
      input: ''
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }


  handleClick1() {
    this.state.power = !(this.state.power);

    let x = document.getElementById("range");

    if (this.state.power) {
      document.getElementById("toggle1").style.float = "right";
      x.disabled = false;
      x.load();
    }
    else {
      document.getElementById("toggle1").style.float = "left";
      document.getElementById("set-song-name").innerHTML = "";

      x.disabled = true;
      x.load();
    }
  }
  handleClick2() {
    this.setState({
      bank: !(this.state.bank)
    });

    if (this.state.bank) {
      document.getElementById("toggle2").style.float = "right";
      document.getElementById("Q").src = chord1;
      document.getElementById("W").src = chord2;
      document.getElementById("E").src = chord3;
      document.getElementById("A").src = chord4;
    }
    else {
      document.getElementById("toggle2").style.float = "left";
      document.getElementById("Q").src = Heater1;
      document.getElementById("W").src = Heater2;
      document.getElementById("E").src = Heater3;
      document.getElementById("A").src = Heater4;
    }
  }

  

  handleChange1() {
    document.getElementById("set-song-name").innerHTML = "VOLUME:" + document.getElementById("range").value;
  }

  handleClick(props){
    this.setState({input: props.input})
    console.log(this.state.input);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeypress);
  }
  handleKeypress(event){
    if(event.keyCode === 81)
    {
      this.btn1.click();
    }
    if(event.keyCode === 87)
    {
      this.btn2.click();
    }
    if(event.keyCode === 69)
    {
      this.btn3.click();
    }
    if(event.keyCode === 65)
    {
      this.btn4.click();
    }
    if(event.keyCode === 83)
    {
      this.btn5.click();
    }

    if(event.keyCode === 68)
    {
      this.btn6.click();
    }
    if(event.keyCode === 90)
    {
      this.btn7.click();
    }
    if(event.keyCode === 88)
    {
      this.btn8.click();
    }
    if(event.keyCode === 67)
    {
      this.btn9.click();
    }
  }


  render() {

    return (<div>
      <div id="drum-machine" onKeyDown={this.handleKeypress}>

        <div id="element-container">
          <header>FCC</header>
          <div id='container'>
            <div id="box1">
              <div id="drum-grid">
                <button ref={node => (this.btn1 = node)} className='drum-pad' id="btn-1" onClick={() => playSound('Q', this.state.power, this.state.bank, 'Heater 1', 'chord1')}>Q<audio className='clip' src={Heater1} id="Q" /></button>
                <button ref={node => (this.btn2 = node)} className='drum-pad' id="btn-2" onClick={() => playSound('W', this.state.power, this.state.bank, 'Heater 2', 'chord2')} >W<audio className='clip' src={Heater2} id="W" /></button>
                <button ref={node => (this.btn3 = node)} className='drum-pad' id="btn-3" onClick={() => playSound('E', this.state.power, this.state.bank, 'Heater 3', 'chord3')} >E<audio className='clip' src={Heater3} id="E" /></button>

                <button ref={node => (this.btn4 = node)} className='drum-pad' id="btn-4" onClick={() => playSound('A', this.state.power, this.state.bank, 'Heater 4', 'chord4')} >A<audio className='clip' src={Heater4} id="A" /></button>
                <button ref={node => (this.btn5 = node)} className='drum-pad' id="btn-5" onClick={() => playSound('S', this.state.power, this.state.bank, 'Clap', 'Clap')} >S<audio className='clip' src={Clap} id="S" /></button>
                <button ref={node => (this.btn6 = node)} className='drum-pad' id="btn-6" onClick={() => playSound('D', this.state.power, this.state.bank, 'Open-HH', 'Open-HH')} >D<audio className='clip' src={OpenHH} id="D" /></button>

                <button ref={node => (this.btn7 = node)} className='drum-pad' id="btn-7" onClick={() => playSound('Z', this.state.power, this.state.bank, "Kick-n'Hat", "Kick-n'Hat")} >Z<audio className='clip' src={Kick_n_Hat} id="Z" /></button>
                <button ref={node => (this.btn8 = node)} className='drum-pad' id="btn-8" onClick={() => playSound('X', this.state.power, this.state.bank, "Kick", 'Kick')} >X<audio className='clip' src={Kick} id="X" /></button>
                <button ref={node => (this.btn9 = node)} className='drum-pad' id="btn-9" onClick={() => playSound('C', this.state.power, this.state.bank, "Closed-HH", 'Closed-HH')} >C<audio className='clip' src={ClosedHH} id="C" /></button>
              </div>
            </div>
            <div id="box2">
              <div className="toggleBox">
                <p>Power</p>
                <div id="power" onClick={this.handleClick1}>
                  <div id="toggle1"></div>
                </div>
              </div>
              <div id="display">
                <p id="set-song-name"></p>
              </div>
              <div id="volume-slider">
                <input type="range" id="range" min="1" max="100" onChange={this.handleChange1} />
              </div>
              <div className="toggleBox">
                <p>Bank</p>
                <div id="bank" onClick={this.handleClick2}>
                  <div id="toggle2"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>);
  }
}

export default drumMachine;
