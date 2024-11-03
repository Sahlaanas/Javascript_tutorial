import React from "react";
import ListItem from './ListItem.js'
// import Tools from './List.js'

const arr = [{

    title: "Appointment for October",
    descr: "The patient is rescheduled to October",
    isActive: true
},
{

    title: "Appointment for November",
    descr: "The patient is rescheduled to October",
    isActive: false
},
{

    title: "Appointment for december",
    descr: "The patient is rescheduled to december",
    isActive: true
}];


class List extends React.Component {
    render() {
        return (

            <div className='app-list'>
                {
                    arr.map((item) => {
                        return <ListItem title={item.title} descr={item.descr} isActive={item.isActive} />
                    })
                }



            </div>


        );

    };
}





export default List;
