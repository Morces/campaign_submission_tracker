"use client";

import React, { useContext, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import AppContext from "./AppContext";

const Topbar = () => {
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };

  const today = new Date();
  const formattedDate = formatDate(today);

  const { user } = useContext(AppContext);

  return (
    <div className="flex w-full fixed right-4 top-4 justify-end gap-x-4 items-center">
      <div className="flex flex-col items-end">
        <p className="font-bold">{""}</p>
        <p className="text-gray-600">{formattedDate}</p>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Topbar;
