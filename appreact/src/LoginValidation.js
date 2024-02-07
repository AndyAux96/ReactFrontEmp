function LoginValidation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){8,}$/;
    
    if (values.email === "") {
        error.email = "El email no puede ir vacio";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Correo no valido";
    } else {
        error.email = "";
    }

    if (values.passx === "") {
        error.passx = "El password no puede ir vacio";
    }
    else if (!password_pattern.test(values.passx)) {
        error.passx = "pass didn't match";
    }
    else {
        error.passx = "";
    }
    return error;
}
export default LoginValidation;
