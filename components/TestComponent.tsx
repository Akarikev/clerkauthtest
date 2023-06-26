"use client";

import { currentUser, useAuth } from "@clerk/nextjs";
import React from "react";

async function TestComponent() {
  const { userId } = useAuth();

  const user = currentUser();

  return (
    <div>
      {(await user) ? <div>user available : {userId}</div> : <div>No user</div>}
    </div>
  );
}

export default TestComponent;
