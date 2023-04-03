import React from 'react'
import Block from "../Block/Block"
import './Box.css'

function Box({box, onClick}) {
      return (
            <div className="box">
                  {box.map((value, index) => {
                        return <Block value={value} key={index} onClick={() => value === null && onClick(index)} />
                  })}
            </div>
      )
}

export default Box