import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';


function Resume({ name, title, careerObj, address, phone, email, linkedin, github, leetcode, workexperience, courses, education, hardSkill, softSkills, interests, reference }) {
  console.log("hardSkill", hardSkill)
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data'
  });
  // })
  return (
    <div>
      <button onClick={handlePrint} className='btn btn-primary mx-48 my-5'>Download resume</button>
      <div className='border-solid border-2 border-blue-400 w-3/4 mx-auto'>
        <div ref={componentRef} className='flex justify-center mx-auto'>
          <div className='bg-blue-900 w-3/12 p-6 box-border' style={{ overflowWrap: "anywhere", height:'1055px' }}>
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
                  hardSkill.map((hard, index) => <p key={hard + "" + index} className='text-gray-400 text-sm inline mx-1'>{hard}</p>)
                }
              </div>
            }

            {
              softSkills && <div>
                <h1 className='text-gray-400 uppercase tracking-widest text-lg font-bold'>Soft Skills</h1>
                <hr className='mb-5 w-1/6' />
                {
                  softSkills.map((soft, index) => <h1 key={soft + "" + index} className='text-gray-400 text-sm'>{soft}</h1>)
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
            <p className='text-gray-400 text-sm'>{reference.name}</p>
            <p className='text-gray-400 text-sm'>{reference.profession}</p>
            <p className='text-gray-400 text-sm'>{reference.phone}</p>
          </div>
          <div className='bg-white w-9/12 p-10'>
            <h1 className='font-bold text-2xl'>{name}</h1>
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
                  workexperience.map((exp, index) => <div key={exp + "" + index}>
                    <h1 className='font-bold font-2xl'>{exp.companyName}</h1>
                    <h1 className='text-gray-500 font-semibold'>{exp.position} ({exp.from} to {exp.to})</h1>
                    <h1 className='font-semibold tracking-wider text-gray-600'>{workexperience.companyName}</h1>
                    {
                      exp?.responsibilities?.map((res, index) => <h1 key={res + "" + index} className='text-gray-500'>{res}</h1>)
                    }
                  </div>)
                }

              </div>
            }
            {
              courses && <div>
                <h1 className='font-bold text-2xl uppercase tracking-wider my-2 text-gray-500'>Courses/Training</h1>
                <hr className='h-2' />
                {
                  courses.map((course, index) => <div key={course + "" + index}>
                    <h1 className='font-bold tracking-wider text-gray-600'>{course.courseName}</h1>
                    <h1 className='text-sm tracking-wider text-gray-600'>{course.website}</h1>
                  </div>)
                }

              </div>
            }
            {
              education && <div>
                <h1 className='font-bold text-2xl uppercase tracking-wider my-2 text-gray-500'>Education</h1>
                <hr className='h-2' />
                {
                  education.map((edu, index) => <div key={edu + "" + index}>
                    <h1 className='font-bold tracking-wider text-gray-600'>{edu.school}</h1>
                    <h1 className='text-sm tracking-wider text-gray-600'>{edu.degree}</h1>
                    <h1 className='text-sm tracking-wider text-gray-600'>{edu.cgpa}</h1>
                  </div>)
                }

              </div>
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;