import React from "react";
import { createUser } from "../actions/post-action";

const P = async () => {
  try {
    await createUser({
      name: "robin",
      password: "hello",
      email: "hi@gmail.com",
      phone: "opke",
    });
    console.log("success");
  } catch (error) {
    console.log(error);
  }
  return <div></div>;
};

export default P;
