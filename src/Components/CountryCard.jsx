import React ,{useState, useEffect} from 'react'
import FlagImage from './afganistan.png'
import classes from './CountryCard.css'
import CountryCardApi from './CountryCardApi'
import { useNavigate } from 'react-router-dom'
import DetailPage from '../Pages/DetailPage'
import axios, { Axios } from 'axios'

function CountryCard() {
    const navigate = useNavigate()
    const[posts ,setposts] =useState([])
     
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(res =>{
            console.log(res)

        })
        .catch(err =>{
            console.log(err)
        })
    })


// constructor(props) {
//     super(props)

//     this.state = {
//          posts:[]
//     }

// }
// componentDidMount(){
//     axios.get("https://restcountries.com/v3.1/all")
//     .then(Response=>{
//         console.log(Response);
//     })
//     .catch(error=>{
//         console.log(error);
//     })

    
// }

function CardClickHandler(event){

event.preventDefault()
navigate('/pages')

return (<DetailPage/>);

}


return (
    
        <div onClick={CardClickHandler} className='maincard'>
            <div className='flagsec'>
                <img src={FlagImage}/>
            </div>
            <div className='flaginfo'>
                <span>Afganistan</span>
                <span>Population:</span>
                <span>Region:</span>
                <span>Capital:</span>
            </div>
            <CountryCardApi/>
        </div>
    )
}


export default CountryCard
