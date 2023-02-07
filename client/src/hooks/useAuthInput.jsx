import React, { useState, useCallback } from "react";

const useAuthInput = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  return {
    onChange,
    email,
    password,
  };
};

export default useAuthInput;
