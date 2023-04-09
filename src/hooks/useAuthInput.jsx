import React, { useState, useCallback } from "react";

const useAuthInput = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [passEmail, setPassEmail] = useState(false);
  const [passPwd, setPassPwd] = useState(false);
  const { email, password } = inputs;

  const onChangeAuthInput = useCallback(
    (e) => {
      const { name, value } = e.target;

      setInputs({
        ...inputs,
        [name]: value,
      });

      if (name === "email") {
        if (value.includes("@") && value.includes(".")) {
          setPassEmail(true);
        } else {
          setPassEmail(false);
        }
      } else if (name === "password") {
        if (value.length >= 8) {
          setPassPwd(true);
        } else {
          setPassPwd(false);
        }
      }
    },
    [inputs]
  );

  return {
    onChangeAuthInput,
    email,
    password,
    passEmail,
    passPwd,
  };
};

export default useAuthInput;
