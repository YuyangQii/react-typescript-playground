import React, { useState, type SubmitEvent } from "react";

// ⭐️ 放在 component 外面，因为它不需要用到 state
// 只是单纯检查 email 格式
// const validateEmail = (email: string) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     );
// };

export default function SignUpForm() {
  const [email, setEmail] = useState("");

  // const [password, setPassword] = useState();
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const [education, setEducation] = useState("");

  const [isError, setIsError] = useState(false);

  const [error, setError] = useState<null | string>("");

  const degrees = [
    { text: "High School Diploma", value: "HS" },
    { text: "Associate's Degree", value: "AA" },
    { text: "Bachelor's Degree", value: "BA" },
    { text: "Master's Degree", value: "MA" },
    { text: "Doctorate (PhD)", value: "PHD" },
    { text: "Professional Degree (MD, JD)", value: "PROF" },
  ];

  const handleSignUp = (e: SubmitEvent) => {
    e.preventDefault();
    // if (!validateEmail) {
    //   setError("email not valid");
    // }

    if (!validateEmail(email)) {
      setIsError(true);
      setError("Email is not valid");
      return;
    }

    if (password.length < 8) {
      setIsError(true);
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setIsError(true);
      setError("Passwords do not match");
      return;
    }

    if (!isTermsAccepted) {
      setIsError(true);
      setError("You must accept the terms first");
      return;
    }

    if (!education) {
      setIsError(true);
      setError("Please select your highest education");
      return;
    }

    setIsError(false);
    setError(null);

    console.log("Sign Up Successful");
    console.log({
      email,
      password,
      education,
      isTermsAccepted,
    });

  };

  return (
  <form onSubmit={handleSignUp}>
    <h2>Sign Up</h2>

    {isError && <p style={{ color: "red" }}>{error}</p>}

    <div>
      <label>Email:</label>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div>
      <label>Password:</label>
      {/* <input value={password} /> */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <div>
      <label>Confirm Password:</label>

      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>

    <div>
      <label>
        <input
          type="checkbox"
          checked={isTermsAccepted}
          // ❌ 少写了括号
          // onChange={setIsTermsAccepted(!isTermsAccepted)}
          onChange={() =>
            setIsTermsAccepted(!isTermsAccepted)
          }
        />
        Accept Terms
      </label>
    </div>

    <button type="submit">Sign Up</button>
    {/* <button type="buttons">Help</button> */}
    <button type="button">Help</button>
  </form>
);