import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Common/Loading";
import useAuth from "../Auth/ContextAuth/useAuth";

const JobDetails = () => {
  const params = useParams();
  const {
    data: details,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["details", params.id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/jobs/${params.id}`);
      return res.json();
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(params);
  console.log(details);

  const {
    _id,
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange: { min, max, currency },
    status,
    title,
  } = details;

   
  return (
    <div>
     
      <div className="max-w-5xl mx-auto p-10 space-y-8">
        {/* Job Header */}
        <div className="flex items-center gap-6">
          {company_logo && (
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="h-20 w-20 object-contain rounded"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600 text-lg">{company}</p>
            <p className="text-gray-500">{location}</p>
            <p className="mt-1 inline-block bg-slate-200 px-3 py-1 rounded font-semibold">
              {category}
            </p>
          </div>
        </div>

        {/* Job Basic Info */}
        <div className="flex flex-wrap gap-6 text-gray-700 font-medium">
          <p>
            <span className="font-semibold">Job Type:</span> {jobType}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> {min} - {max}{" "}
            {currency}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {status}
          </p>
          <p>
            <span className="font-semibold">Application Deadline:</span>{" "}
            {new Date(applicationDeadline).toLocaleDateString()}
          </p>
        </div>

        {/* Job Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Job Description</h2>
          <p className="text-gray-700 whitespace-pre-line">{description}</p>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Requirements</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {requirements?.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {responsibilities?.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Person</h2>
          <p>
            <span className="font-semibold">Name:</span> {hr_name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {hr_email}
          </p>
        </div>

        {/* Apply Job Form (Blank for now) */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Apply for this Job</h2>
          <form className="space-y-4 border rounded p-6 shadow-md">
            {/* You can add form inputs here later */}
            <p className="text-gray-500 italic">
              Application form will go here.  when job apply is done then refetch this page
            </p>
            <p>
                make a different form or do here || take file for resume and CV or link of docs of cv and gt linkedin profile
            </p>
            <p>make recruiter layout where he can see how much applications done and in every job post show how many people apply || set a condition one user just apply once in a job</p>
            <p>set. a condition deadline miss can cannot apply anyone</p>
            <p>below the details show most recent similar type job</p>
            <p>show count how many jobs nad user and recruiter and how many people hired</p>
            <p>how many people hired get this information from the recruiter confiration</p>
            <p>every user can visit recruiter profile and can see information</p>
            <button
              type="submit"
              disabled
              className="btn btn-primary opacity-50 cursor-not-allowed"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
