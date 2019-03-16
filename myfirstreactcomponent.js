class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    this.handleChange=this.handleChange.bind(this);
    this.submitMessage=this.submitMessage.bind(this);
    };
  handleChange(event){
      this.setState({
        input: event.target.value
      });
  }
    submitMessage(){this.setState({input: '',
      messages: this.state.messages.concat(this.state.input)})};
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
       <input value={this.state.input} onChange={this.handleChange}/>
           { 
          <button className='inc' onClick={this.submitMessage}>Add Message!</button> 
          }
    {   <ul>
            {this.state.messages.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          }
        </div>
      );
    }
  };