import { useState } from "react";
import style from "./Form.module.css";
import rick from "../../images/rick.png";
import morty from "../../images/morty.png";
import validation from "../../utils/validation";

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData((prevUserData) => ({ ...prevUserData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validation(userData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      props.login(userData);
    }
  };

  return (
    <>
      <div className={style.welcome}>
        <h1>Rick and Morty App</h1>
        <img src={rick} alt="rick" />
        <img src={morty} alt="morty" />
        <h2>Identificate:</h2>
      </div>

      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <div className={style.label}>
            <label htmlFor="email">e-mail:</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="henry@mail.com"
            />
            <span>usar: henry@mail.com</span>
            {errors.email && (
              <span className={style.error}>{errors.email}</span>
            )}
          </div>

          <div className={style.label}>
            <label htmlFor="password">password:</label>
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="pepito123"
            />
            <span>usar: pepito123</span>
            {errors.password && (
              <span className={style.error}>{errors.password}</span>
            )}
          </div>

          <input type="submit" value="Ingresar" className={style.submit} />
        </form>
      </div>
    </>
  );
};

export default Form;
