
export default function validation (data) {

    const errors = {};

    let mailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let passwordRegex = /\d/;

    if(!data.email) {
        errors.email = "Ingresa tu e-mail"
    } else if (!mailRegex.test(data.email)) {
        errors.email = "Ingrese un e-mail valido"
    } else if (data.email.length >= 35) {
        errors.email = "El e-mail es demasiado largo"
    }

    if(!passwordRegex.test(data.password)) {
        errors.password = "Debe contener al menos 1 numero"
    } else if ( data.password.length < 6 || data.password.length > 10) {
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }

    return errors;
}

