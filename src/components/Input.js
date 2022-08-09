import React, { useState } from 'react'
import Inputtemplate from './Inputtemplate'
import Resume from './Resume';

function Input() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [careerObj, setCareerObj] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [leetcode, setLeetcode] = useState('');
    const [workexperience, setWorkexperience] = useState([]);
    const [courses, setCourses] = useState([]);
    const [education, setEducation] = useState([]);
    const [hardSkill, setHardSkill] = useState([]);
    const [softSkills, setSoftSkills] = useState([]);
    const [interests, setInterests] = useState([]);
    const [reference, setReferrence] = useState({});

    // handle work experience
    const handleWorkExperience = (e) => {
        e.preventDefault();
        const company = e.target.Company.value;
        const position = e.target.Position.value;
        const fromDate = e.target.from.value;
        const toDate = e.target.to.value;
        const responsibility = e.target.Responsibilities.value;
        const data = { companyName: company, position: position, from: fromDate, to: toDate, responsibilities: [responsibility] }
        setWorkexperience([...workexperience, data]);
        e.target.Company.value = '';
        e.target.Position.value = '';
        e.target.from.value = '';
        e.target.to.value = '';
        e.target.Responsibilities.value = '';
    };
    console.log(workexperience)
    // handle courses
    const handleCourses = (e) => {
        e.preventDefault()
        const course = e.target.course.value;
        const website = e.target.website.value;
        const data = { courseName: course, website: website }
        setCourses([...courses, data])
    };
    // handle education
    const handleEducation = (e) => {
        e.preventDefault()
        const degree = e.target.Degree.value;
        const school = e.target.School.value;
        const cgpa = e.target.cgpa.value;
        const data = { degree: degree, school: school, cgpa: cgpa }
        setEducation([...education, data])
    };
    // handle hardskilll
    const handleHardSkill = (e) => {
        e.preventDefault()
        const skill = e.target.Hard.value;
        setHardSkill([...hardSkill, skill])
        e.target.Hard.value = '';
    };
    // handle hardskilll
    const handleSoftSkill = (e) => {
        e.preventDefault()
        const skill = e.target.Soft.value;
        setSoftSkills([...softSkills, skill])
        e.target.Soft.value = '';
    };
    // handle hardskilll
    const handleInterests = (e) => {
        e.preventDefault()
        const interest = e.target.Interest.value;
        setInterests([...interests, interest])
        e.target.Interest.value = '';
    };
    console.log(interests);
    const handleReferrence = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const profession = e.target.profession.value;
        const number = e.target.phone.value;
        const data = { name: name, profession: profession, phone: number }
        setReferrence(data)
    };



  return (
      <div>
          <div className='bg-black-500 w-5/6 lg:w-3/4  mx-auto font-serif'>
              <p className='my-6 font-bold text-xl'>Basic Info</p>
              <div>
                  <Inputtemplate name='Name' type='text' click={(e) => setName(e.target.value)}></Inputtemplate>
                  <Inputtemplate name='Title' type='text' click={(e) => setTitle(e.target.value)}></Inputtemplate>
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
                  <div className="grid md:grid-cols-2 md:gap-6">
                      <Inputtemplate name='from' type='date'></Inputtemplate>
                      <Inputtemplate name='to' type='date'></Inputtemplate>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                      <Inputtemplate name='Responsibilities' type='text'></Inputtemplate>
                  </div>
                  <button type='submit' className='btn btn-primary'>set experience</button>
              </form>
              {/* course and training */}
              <p className='my-6 font-bold text-xl'>Course and training</p>
              <form onSubmit={handleCourses}>
                  <div className="grid md:grid-cols-2 md:gap-6">
                      <Inputtemplate name='course' type='text'></Inputtemplate>
                      <Inputtemplate name='website' type='text'></Inputtemplate>
                  </div>
                  <button type='submit' className='btn btn-primary'>Set Course</button>
              </form>
              {/* Education */}
              <p className='my-6 font-bold text-xl'>Education</p>
              <form onSubmit={handleEducation}>
                  <div className="grid md:grid-cols-2 md:gap-6">
                      <Inputtemplate name='Degree' type='text'></Inputtemplate>
                      <Inputtemplate name='School' type='text'></Inputtemplate>
                      <Inputtemplate name='cgpa' type='text'></Inputtemplate>
                  </div>
                  <input type="submit" value="Set value" className='btn btn-primary' />
              </form>
              <p className='my-6 font-bold text-xl'>Hard Skills</p>
              <form onSubmit={handleHardSkill}>
                  <Inputtemplate name='Hard' type='text'></Inputtemplate>
                  <input type="submit" value="Set value" className='btn btn-primary' />
              </form>
              <p className='my-6 font-bold text-xl'>Soft Skills</p>
              <form onSubmit={handleSoftSkill}>
                  <Inputtemplate name='Soft' type='text'></Inputtemplate>
                  <input type="submit" value="Set value" className='btn btn-primary' />
              </form>
              <p className='my-6 font-bold text-xl'>Interests</p>
              <form onSubmit={handleInterests}>
                  <Inputtemplate name='Interest' type='text'></Inputtemplate>
                  <input type="submit" value="Set value" className='btn btn-primary' />
              </form>
              <p className='my-6 font-bold text-xl'>Referrence</p>
              <form onSubmit={handleReferrence}>
                  <div className="grid md:grid-cols-2 md:gap-6">
                      <Inputtemplate name='name' type='text'></Inputtemplate>
                      <Inputtemplate name='profession' type='text'></Inputtemplate>
                      <Inputtemplate name='phone' type='text'></Inputtemplate>
                  </div>
                  <input className='btn btn-primary' type="submit" value="Set referrence" />
              </form>
          </div>
          <h1 className='text-center text-2xl font-serif'>your Resume</h1>
          <div>
              <Resume const name={name}
                  title={title}
                  careerObj={careerObj}
                  address={address}
                  phone={phone}
                  email={email}
                  linkedin={linkedin}
                  github={github}
                  leetcode={leetcode}
                  workexperience={workexperience}
                  courses={courses}
                  education={education}
                  hardSkill={hardSkill}
                  softSkills={softSkills}
                  interests={interests}
                  reference={reference}></Resume>
          </div>
      </div>
  )

}

export default Input