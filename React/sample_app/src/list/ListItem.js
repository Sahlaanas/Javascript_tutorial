import React from 'react';
import Label from './Label';


function ListItem (props) {
    const {title, descr, isActive} = props
    return (
      <div className='list-item'>
            <hr/>
            <div className='list-title'>
              <h4>{title} </h4>
  
            </div>
            <div className='list-descr'>
              {descr}
  
            </div>
           <Label onAction = {() => {return console.log('Parent clicked')}}isActive = {isActive} />
           
            <hr/>
  
          </div>
    )
  }

  export default ListItem;


  