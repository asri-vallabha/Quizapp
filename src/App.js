import React,{useState} from 'react'
import AllQuestions from './AllQuestions'
import Questions from './Questions.json'
import './App.css'

function App(props) {
  let tempMarks =[]
  const [marks,setMarks]=useState([])
  const changeHandler=(value,index)=>{
    tempMarks = marks;
    tempMarks[index]=value
    setMarks([...tempMarks])
  }
  return (
    <div className='.App-header'>
      
        {
          Questions.map((question,index)=>{
            return (
              <AllQuestions question={question} index={index} changeHandler={changeHandler}/>
            )
          })
        }
       <center><button className='tarak' onClick={()=> alert(marks.reduce((a,b)=>a+b,0)+'/10')}>End Quiz</button></center> 
      
    </div>
  )
}

export default App
