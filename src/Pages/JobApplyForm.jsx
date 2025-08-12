import React from "react";
import useAuth from '../Auth/ContextAuth/useAuth'
import axios from 'axios';

const JobApplyForm = ({ id }) => {
   
    const { user } = useAuth();

  const applyJobHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const newApply = {
        job_id: id,
        candidate: user?.email,
        linkedin,
        github,
        resume
    }
    // console.log(newApply)
    axios.post('http://localhost:4000/applications', newApply)
    .then(data => {
        if(data.data.insertedId){
            console.log("Inserted to DB");
        }
    })
    .catch(error => {
        console.log("Error: ", error.message);
    })
     
  }

  console.log(user.email)

  return (
    <div className="hero flex justify-center items-center">
      <div className="hero-content  w-full">
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <div className="card-body max-w-xl mx-auto w-full">
            <form onSubmit={(e) => applyJobHandle(e)} className="fieldset w-full">
              <label className="label">Linkedin URL</label>
              <input type="url" name="linkedin" className="input w-full" placeholder="Linkedin" />
              <label className="label">Github URL</label>
              <input type="url" name="github" className="input w-full" placeholder="Github" />
              <label className="label">Resume URL</label>
              <input type="url" name="resume" className="input w-full" placeholder="Resume" />
               
              <button className="btn btn-neutral mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplyForm;
