import React, { Component } from 'react';

class heightPage extends Component{
    constructor(props) {
        super(props);
        this.state = { height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ height: window.innerWidth });
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>the height: {this.state.height}</h1>
            </div>
        )
    }
}



// const heightPage =()=>{
//     let heightOfPage = window.innerHeight()
//     return(
//         <div>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <h1>{ heightOfPage }</h1>
//         </div>
//     )
// }

export default heightPage;