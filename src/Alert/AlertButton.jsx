

class AlertButton extends React.Component {
  constructor(props) {
    super(props);
    this.alertText = this.alertText.bind(this);
  }
  alertText() {
    alert(this.props.text);
  }
  render() {
    return (
      <button onClick={this.alertText}>NO. {this.props.num} 我是一個 {this.props.text} 按鈕</button>
    );
  }
}
/*
  AlertButton.propTypes = {
    text: React.PropTypes.string,
    num:  React.PropTypes.num
  };
  
  AlertButton.defaultProps = {
    text : 'default text',
    num: 0
  };
*/  
module.exports = AlertButton;
