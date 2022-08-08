import React, { useState } from 'react'
import Inputtemplate from './Inputtemplate'

function Input() {
    const [name, setName] = useState('');
    const [careerObj, setCareerObj] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [leetcode, setLeetcode] = useState('');
    const [workexperience, setWorkexperience] = useState([{companyName:'', position:'', from:'', to:'', responsibilities:[]}]);
    const [course, setCourse] = useState([{ courseName: '', website: '' }]);
    const [education, setEducation] = useState([{ degree: '', schoolName: '', cgpa: '' }]);
    const [hardSkill, setHardSkill] = useState([]);
    const [softSkills, setSoftSkills] = useState([]);
    const [interests, setInterests] = useState([]);
    const [reference, setReferrence] = useState({ name: '', definition: '', phone: '' });
    

    // handle work experience
    const handleWorkExperience = (e) => {
        e.preventDefault();
        const company = e.target.Company.value;
        const position = e.target.Position.value;
        const fromDate = e.target.from.value;
        const toDate = e.target.to.value;
        const responsibility = e.target.Responsibilities.value;
        const data = { companyName: company, position: position, from: fromDate, to: toDate, responsibilities: [responsibility] }
        console.log(data)
        
    }



  return (
      <div className='bg-black-500 w-5/6 lg:w-3/4  mx-auto font-serif'>
          <p className='my-6 font-bold text-xl'>Basic Info</p>
          <div>
              <Inputtemplate name='Name' type='text' click={(e)=>setName(e.target.value)}></Inputtemplate>
              <Inputtemplate name='Career Objective' type='text' click={(e) => setCareerObj(e.target.value)}></Inputtemplate>
          </div>
          {/* personal information */}
          <p className='my-6 font-bold text-xl'>Personal Information</p>
          <div className="grid md:grid-cols-2 md:gap-6">
              <Inputtemplate name='Address' type='text' click={(e) => setAddress(e.target.value)}></Inputtemplate>
              <Inputtemplate name='Phone' type='number' click={(e) => setPhone(e.target.value)}></Inputtemplate>
          </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <Inputtemplate name='Email' type='email' click={(e) => setEmail(e.target.value)}></Inputtemplate>
              <Inputtemplate name='Linked In' type='text' click={(e) => setLinkedin(e.target.value)}></Inputtemplate>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
              <Inputtemplate name='Github' type='text' click={(e) => setGithub(e.target.value)}></Inputtemplate>
              <Inputtemplate name='Leetcode/hackerrank' type='text' click={(e) => setLeetcode(e.target.value)}></Inputtemplate>
          </div>
          {/* work experience */}
          <p className='my-6 font-bold text-xl'>Work Experience</p>
          <form onSubmit={handleWorkExperience}>
              <div className="grid md:grid-cols-2 md:gap-6">
                  <Inputtemplate name='Company' type='text'></Inputtemplate>
                  <Inputtemplate name='Position' type='text'></Inputtemplate>
              </div>
              <p>workdate</p>
              <div className="grid md:grid-cols-2 md:gap-6">
                  <Inputtemplate name='from' type='date'></Inputtemplate>
                  <Inputtemplate name='to' type='date'></Inputtemplate>
              </div>
              <div className="">
                  <Inputtemplate name='Responsibilities' type='text'></Inputtemplate>
              </div>
              <button type='submit' className='btn btn-primary'>set value</button>
          </form>
          {/* course and training */}
          <p className='my-6 font-bold text-xl'>Course and training</p>
          <div className="grid md:grid-cols-2 md:gap-6">
              <Inputtemplate name='Course name' type='text'></Inputtemplate>
              <Inputtemplate name='website' type='text'></Inputtemplate>
          </div>
          {/* Education */}
          <p className='my-6 font-bold text-xl'>Education</p>
          <div className="grid md:grid-cols-2 md:gap-6">
              <Inputtemplate name='Degree' type='text'></Inputtemplate>
              <Inputtemplate name='School/college/university name' type='text'></Inputtemplate>
              <Inputtemplate name='cgpa' type='text'></Inputtemplate>
          </div>
          <p className='my-6 font-bold text-xl'>Hard Skills</p>
          <div className="">
              <Inputtemplate name='Hard Skill' type='text'></Inputtemplate>
          </div>
          <p className='my-6 font-bold text-xl'>Soft Skills</p>
          <div className="">
              <Inputtemplate name='Soft Skill' type='text'></Inputtemplate>
          </div>
          <p className='my-6 font-bold text-xl'>Interests</p>
          <div className="">
              <Inputtemplate name='Interest' type='text'></Inputtemplate>
          </div>
          <p className='my-6 font-bold text-xl'>Referrence</p>
          <div className="grid md:grid-cols-2 md:gap-6">
              <Inputtemplate name='name' type='text'></Inputtemplate>
              <Inputtemplate name='Job Responsibility' type='text'></Inputtemplate>
              <Inputtemplate name='Phone Number' type='text'></Inputtemplate>
          </div>
        </div>
  )

}

export default Input