import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LoggedInScreen = () => {
  const [users, setUsers] = useState([]);

  const userLogin = useSelector((state) => state.isLoggedIn);

  const { loading, userInfo, error } = userLogin;

  const history = useHistory();

  useEffect(() => {
    if (!userInfo?.data?.token) {
      history.push("/");
    }

    const getUsers = async () => {
      await axios
        .get("https://apiloginappmean.herokuapp.com/api/posts", {
          headers: {
            "auth-token": userInfo?.data?.token,
          },
        })
        .then((res) => setUsers(res.data.users))
        .catch((err) => console.log(err));
    };
    getUsers();
  }, []);

  return (
    <div>
      <h4>Welcome to the Admin Panel</h4>
      <div>
        <br />
        <h5>List Of Users</h5>
        <hr />
        {users?.map((user, index) => (
          <>
            <h6>
              {index + 1}) {user.name}
            </h6>
            <div>Email: {user.email}</div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default LoggedInScreen;
