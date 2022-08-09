import React from 'react'

function Resume({ name, title, careerObj, address, phone, email, linkedin, github, leetcode, workexperience, courses, education, hardSkill, softSkills, interests, reference }) {
  console.log("hardSkill", hardSkill)
  return (
      <div className='flex justify-center  border-solid mt-10 mx-auto w-3/4 border-2 border-sky-500'>
      <div className='bg-blue-900 w-3/12 h-auto p-6 box-border' style={{overflowWrap: "anywhere"}}>
              <div className='flex items-center justify-center mb-10'>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" className='rounded-full w-32 border-2' />
              </div>
              <h1 className='text-gray-400 uppercase tracking-widest text-lg font-bold'>Personal Information</h1>
              <hr className='mb-5 w-1/6' />
              {
                address && <div>
                  <h1 className='text-gray-400 text-md'>address</h1>
                  <p className='text-gray-400 text-sm'>{address}</p>
                </div>
              }
              {
                phone && <div>
                  <h1 className='text-gray-400 text-md'>Phone</h1>
                  <p className='text-gray-400 text-sm'>{phone}</p>
                </div>
              }
              {
                email && <div>
                  <h1 className='text-gray-400 text-md'>Email</h1>
                  <p className='text-gray-400 text-sm'>{email}</p>
                </div>
              }
              {
                linkedin && <div>
                  <h1 className='text-gray-400 text-md'>LinkedIn</h1>
                  <p className='text-gray-400 text-sm'>{linkedin}</p>
                      </div>
              }
              {
                github && <div>
                  <h1 className='text-gray-400 text-md'>Github</h1>
                  <p className='text-gray-400 text-sm'>{github}</p>
                      </div>
              }
              {
                hardSkill && <div>
                  <h1 className='text-gray-400 uppercase tracking-widest text-lg font-bold'>Hard Skills</h1>
                  <hr className='mb-5 w-1/6' />
                  {
                    hardSkill.map((hard, index)=><p key={hard+""+index} className='text-gray-400 text-sm inline mx-1'>{hard}</p>)
                  }
                </div>
              }

              {
                softSkills && <div>
                  <h1 className='text-gray-400 uppercase tracking-widest text-lg font-bold'>Soft Skills</h1>
                  <hr className='mb-5 w-1/6' />
                  {
                    softSkills.map((soft, index)=><h1 key={soft+""+index} className='text-gray-400 text-sm'>{soft}</h1>)
                  }
                </div>
              }

              {
                interests && <div>
                  <h1 className='text-gray-400 uppercase tracking-widest text-lg font-bold'>Interests</h1>
                  <hr className='mb-5 w-1/6' />
                  {
              interests.map((interest, index) => <h1 key={interest + "" + index} className='text-gray-400 text-sm'>{interest}</h1>)
                  }
                </div>
              }

              <h1 className='text-gray-400 uppercase tracking-widest text-lg font-bold'>Referrence</h1>
              <hr className='mb-5 w-1/6' />
              <h1 className='text-gray-400 text-md'>Name</h1>
              <p className='text-gray-400 text-sm'>{reference.name}</p>
              <h1 className='text-gray-400 text-md'>Job</h1>
              <p className='text-gray-400 text-sm'>{reference.profession}</p>
              <h1 className='text-gray-400 text-md'>Phone</h1>
              <p className='text-gray-400 text-sm'>{reference.phone}</p>
          </div>
      <div className='bg-white w-9/12 p-10'>
        <h1 className='font-bold text-2xl'>{ name }</h1>
        <h1 className='font-bold text-lg'>{title}</h1>
              <h1 className='text-gray-500'>
          {
            careerObj
                  }
              </h1>
              {
                workexperience && <div>
                  <h1 className='font-bold text-2xl uppercase tracking-wider my-2 text-gray-500'>Experience</h1>
                  <hr className='h-2' />
                  {
                    workexperience.map((exp, index) => <div key={exp+""+index}>
                      <h1 className='font-bold font-2xl'>{exp.companyName }</h1>
                      <h1 className='text-gray-500 font-semibold'>{exp.position} ({exp.from} to {exp.to})</h1>
                      <h1 className='font-semibold tracking-wider text-gray-600'>{workexperience.companyName}</h1>
                      {
                        exp?.responsibilities?.map((res, index) => <h1 key={res + "" + index} className='text-gray-500'>{res}</h1>)
                      }
                          </div>)
                  }

                </div>
              }
              
              
          </div>
    </div>
  )
}

export default Resume;