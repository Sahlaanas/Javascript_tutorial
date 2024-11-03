import React from "react";
//functional component
// function Label () {
//     return (
//     <div className='list-label'>
//               <span> Label 1</span>
//               <span> Label 2</span>
//               <span> Label 3</span>
  
  
//             </div>
//     );
// }

// export default Label;

//class component

class Label extends React.Component{
    render() {
        const props = this.props;
        const style = props.isActive ? {background : "green"} : {background : "red"}
        return <span onClick={() => {props.onAction()}} style={style}> {props.isActive ? 'Active' : 'Non Active'} </span>
    }
}

export default Label;