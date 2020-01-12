import React, { Component } from 'react'


export default class Fruit extends Component { 
    constructor(props){
        super(props)
    }

    render() {
        const {fruit}=this.props
        return (
            <div>
               <img src={fruit.img} alt='img' width='20' height='20'/> {fruit.name}                
            </div>
        )
    }
}
