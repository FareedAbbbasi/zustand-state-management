import React from 'react'
import "./Task.css"

const STATUS = 'PLANNING';

const Task = ({title}) => {
  return (
    <div className='task'>
        <div>{title}</div>
        <div>
            <div></div>
            <div className='STATUS'>{STATUS}</div>
        </div>
    </div>
  )
}

export default Task