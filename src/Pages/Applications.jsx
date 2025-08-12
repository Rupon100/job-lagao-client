import React from "react";
import useAuth from "../Auth/ContextAuth/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Common/Loading";

const Applications = () => {
  const { user } = useAuth();

  const {
    data: applications,
    isLoading,
  } = useQuery({
    queryKey: ["applications", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/applications?email=${user?.email}`
      );
      return res.json();
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  console.log(applications);

  return (
    <div className="p-4 ">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">My Applications()</h2>
        <button className="btn btn-sm">refresh</button>
      </div>

      <div className="overflow-x-auto">
        <span className="text-sm bg-gray-400 italic" >make a clear history button for remove all application history || button if user is hired or not || status</span>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company</th>
              <th>Category</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                applications?.map(job => (
                    <tr key={job._id} >
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={job.company_logo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job?.title}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                {job?.category}
              </td>
              <th>
                <button className="btn btn-xs">details</button>
              </th>
            </tr>
                ))
            }
         
          
          </tbody>
         
          
        </table>
      </div>
    </div>
  );
};

export default Applications;
