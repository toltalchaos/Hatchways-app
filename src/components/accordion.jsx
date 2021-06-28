import React, {useState, useEffect} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from "styled-components";
import SearchBar from './searchbar';
import TagElement from './tagelement';
import TestList from './testlist';

const UNIT = styled.article`
section{
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
}
h3{
    font-size: 2rem;
    font-weight: bold;
}
.userdata{
   flex-basis: 60%;
}
.user-header{
   display: flex;
   justify-content: space-between;
}
.tags-section{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
button{
    margin: 0 0 0 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: white;
    font-size: 3rem;
    color: grey;
}
button:hover{
    background-color: tomato;
}

img{
    border-radius:50%;
    border:1px solid black;
    margin:1rem;
    width: 30%;
    height: 30%;
    
}
border: 1px solid black;
border-radius: 1rem;
padding: 1rem;
margin:1rem;
`


const Accordion = (props) => {
    const [expanded, setExpanded] = useState(false)
    const [studentData, setStudentData]= useState(props.element)
    const inputbarhandle = document.getElementById(studentData.login);
    let tagarray =[];
    let holder = studentData;
    let average = 0;
    let counter = 0;


    function AddTag(e){
        if(e.key === 'Enter'){
            //save string to new tag
            tagarray.push(document.getElementById(e.target.id).value)
            //give to placeholder to add tag
            holder.tag=tagarray;
            //hand tag back and rerender hook
            setStudentData({...holder})
            //reset value
            document.getElementById(e.target.id).value = ""
        }
    }

        studentData.grades.forEach(grade => {
        average = average + parseInt(grade);
        counter = counter + 1;
    });


        if(studentData.hasOwnProperty('tag')){
        studentData.tag.forEach((element)=> {
            tagarray.push(element)
        })
    }
    else{
        holder.tag=[];
            setStudentData(holder)
    }


    //console.log(studentData)
    

    return (
      <UNIT>
        <section>
          <img src={studentData.pic} alt="person icon" />
          <div className="userdata">
            <div className="user-header">
              <h3>
                {studentData.firstName} {studentData.lastName}
              </h3>
              <button className="btn" onClick={() => setExpanded(!expanded)}>
                {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </div>
            <div>
              <p>Email: {studentData.email}</p>
              <p>Company: {studentData.company}</p>
              <p>Skill: {studentData.skill}</p>
              <p>Average: {Math.round(average / counter)} %</p>
              <div className="tags-section">
                  {
                      studentData.tag.map((tag)=>
                      {
                          return <TagElement content={tag}/>;
                      })
                  }
                  
              </div>
              {expanded && (
                <div>
                  <SearchBar idd={studentData.id} place="add a tag" onKeyUp={AddTag} />

                  <div>
                    {studentData.grades.map((test, index) => {
                      return <TestList index={index} test={test} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </UNIT>
    );
}
 
export default Accordion;