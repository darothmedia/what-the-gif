import React from "react";
import '../../stylesheets/root.scss'
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className='bg'>
        <div className='splash'>
          <section className='top' />
          <section className='center'>
            <h1>WHAT THE GIF!?</h1>
            <div id='game-nav'>
              <Link to='/create'><button>Create Game</button></Link>
              <Link to='/join'><button>Join Game</button></Link>
            </div>
          </section>
          <section className='bottom' />
        </div>
      </div>
    )
  }
}

export default Splash