import React,{Component} from "react";
import todo from './Todo'

// const Form =() =>{
//     return(
//         <div className="container">
//         <div className='innerContainer'>
//           <h1>ToDo List</h1>
//           <form className='form'>
//             <input 
//             type={"text"}
//             value={this.state.input}
//             onChange={this.list}
//             className='innerInput'
//             />
//             <button type='submit' className='innerSubmit' onClick={this.handleChange}>Submit</button>
//           </form>
//         </div>
//         <div className='tasks'>
//           <todo/>
//         </div>
//       </div>
//     );
// };

class Form extends Component{
  constructor(props){
    super(props);

    // handleChange = (e) => {
    //   e.preventDefault();
    //   if(this.state.input !== ''){
    //     const items=this.props.toDo;
    //     items.push(this.props.input);
    //     this.setState({
    //       toDo:items,
    //       input:""
    //     })
    //   }
    // }
  }
  render(){
    return(
      <form className='form'>
            <input 
            type={"text"}
            value={this.props.input}
            onChange={this.list}
            className='innerInput'
            />
            <button type='submit' className='innerSubmit' onClick={this.handleChange}>Submit</button>
          </form>
    );
  }
}