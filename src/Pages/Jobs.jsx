import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Components/Common/Loading";
import Job from "./Job";

const Jobs = () => {
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/");
      return res.json();
    },
  });
  console.log(jobs);
  // console.log(status)

  return (
    <div className="p-10">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <Job key={job._id} job={job}></Job>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
