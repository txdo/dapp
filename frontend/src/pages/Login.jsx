import useLogin from "../hooks/useLogin";

const Login = () => {
  const { userInfo, setUserInfo, login, error } = useLogin();

  return (
    <section className="login">
      <div className="login-panel">
        <form>
          <input
            type="text"
            value={userInfo.username}
            placeholder="Username"
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
          />
          <input
            type="password"
            value={userInfo.password}
            placeholder="Password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
          <button onClick={(e) => login(e)}>Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;
