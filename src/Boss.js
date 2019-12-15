import React, {Component} from 'react';
import './Boss.css'
class Boss extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isShow: true
      }
      this.toToggole = this.toToggole.bind(this);
   }
   toToggole() {
      this.setState({
         isShow: this.state.isShow ? false : true
      })
   }

   render() {
      return (
         <div>
            <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
            <div><button onClick={this.toToggole}>召唤Boss</button></div>
         </div>
      );
   }
}

export default Boss;