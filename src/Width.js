import React, { Component } from 'react';


class widthPage extends Component{
    constructor(props) {
        super(props);
        this.state = { width: 0 };
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
        this.setState({ width: window.innerHeight });
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>the width: {this.state.width}</h1>
            </div>
        )
    }
}


// const widthPage =()=>{
//     let widthOfPage = window.innerWidth()
//     return(
//         <div>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <h1>{ widthOfPage }</h1>
//         </div>
//     )
// }

export default widthPage;