import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    _id,
    category,
    location,
    company,
    company_logo,
    salaryRange: { min, max, currency },
    title,
    requirements,
    jobType,
  } = job;
  return (
    <div className="p-4 rounded shadow max-h-96">
      <div className="space-y-4 flex flex-col h-full">

        <div className="flex items-center gap-2">
          <img src={company_logo} className="h-14 w-14" alt="company logo" />
          <div>
            <h2 className="font-semibold text-xl">{company}</h2>
            <span className="text-sm text-gray-500">{location}</span>
          </div>
        </div>

        <div className="flex-grow">
            <h2 className="text-xl font-bold" >{title}</h2>
          <div>
            <h2 className="text-base font-semibold bg-slate-200 w-fit p-1 rounded">
              {category}
            </h2>
          </div>
          <div>
            <h2 className="font-semibold">
              Salary: {min} - {max} {currency}
            </h2>
            <h3>Type: {jobType}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {requirements.map((req, index) => (
              <span
                className="bg-indigo-400 text-white p-1 rounded shadow mx-1"
                key={index + 1}
              >
                {req}
              </span>
            ))}
          </div>
        </div>
        <button className="btn btn-soft btn-accent"><Link to={`/jobs/${_id}`} >Apply Now</Link></button>
      </div>
    </div>
  );
};

export default Job;
