import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const MyComment = () => {
  const [user] = useAuthState(auth);
  const {
    data: myComments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myComments"],
    queryFn: () =>
      fetch(`https://novo-server.vercel.app/my-comment/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
  console.log(myComments);
  return (
    <div>
      <div className="pt-20 bg-orange-900 text-green-800 min-h-screen">
        <div className="overflow-x-auto mx-20">
          <thead>
            <tr className="bg-orange-300">
              <th></th>
              <th>Name</th>
              <th>Service name</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody></tbody>
        </div>
      </div>
    </div>
  );
};

export default MyComment;

/*
<div className="pt-20 bg-black text-white min-h-screen">
        <div className="overflow-x-auto mx-20">
          <table className="table w-full">
            <thead>
              <tr className="bg-orange-300">
                <th></th>
                <th>Name</th>
                <th>Service Name</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {myComments?.map((c, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{c.name}</td>
                  <td>{c.serviceName}</td>
                  <td>{c.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
*/
