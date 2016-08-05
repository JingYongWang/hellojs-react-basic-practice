
var AlertButton = require('Alert/AlertButton.jsx');

class AlertPage extends React.Component {
  render() {
    var texts = ['Hello World','zet','moomoo'];
    return (  
  /*
      <div>
        <AlertButton text='Hello World' num = 'abc'/>
        <AlertButton text='zet' num = {5}/>
        <AlertButton text='moomoo' num = {7}/>
      </div>
  */
      <div>
  
        {texts.map((t,index) =>{
          return <AlertButton key = {index} text = {t}/> 
        })}
        
        
      </div>
    );
  }
}
module.exports = AlertPage;
