/*
Author: Viktor (victor318x@gmail.com)
About.tsx (c) 2021
Desc: description
Created:  2021/1/30 下午9:11:00
Modified: 2021/1/30 下午9:38:33
*/

import React, {useState, useEffect} from 'react'
const About:React.FC<{}> = () => {
    const [count ] = useState(0)
    useEffect(() => {
        console.log('管')   
    })
    return (
        <div>关于我 {count}</div>
    )
}

export default About