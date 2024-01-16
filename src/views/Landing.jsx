import Form from "../components/Form/Form.jsx"
import style from "./Landing.module.css"

const Landing =(props) => {
    return (
        <div className={style.contenedor}>
        <Form login={props.login} />
        </div>
    )
}

export default Landing;