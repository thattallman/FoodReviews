import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
  return (
    <>
      <h1> Ooops ! Something went wrong </h1>
      <p>
        There is something not correct, There are always solutions to any
        problem created{" "}
      </p>
      <h2>{status + " : "+ statusText}</h2>
    </>
  );
};
export default Error;