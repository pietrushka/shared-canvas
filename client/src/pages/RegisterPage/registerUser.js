import axios from "axios";

export default registerUser = ({name, email, password}) => {
  axios
    .post(`${process.env.SERVER_ENDPOINT}/users/register`, {
      name,
      email,
      password
      })
      .then((response) => {
        console.log("success", response.data.message);
        props.history.push("/login");
      })
      .catch((err) => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          console.log("error", err.response.data.message);
      });
}
