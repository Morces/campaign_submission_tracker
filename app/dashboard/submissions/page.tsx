"use client";

import axios from "axios";
import { Submission, columns } from "./columns";
import { DataTable } from "./data-table";
import React, { useState, useEffect } from "react";

const getData = async () => {
  try {
    const res = await axios("api/submissions", {
      method: "GET",
    });

    if (res?.statusText === "OK") {
      return res?.data?.submissions;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default function Submissions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-4 py-10 max-md:px-4 px-2 max-md:mx-0">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
