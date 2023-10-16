export const validateForm = (em, pass, fn) => {
    const email =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(em);

    const password = /^.{8,}$/.test(pass)

    const fullName = /^[a-zA-Z]+$/.test(fn)

    if (!email) return "Email is not Valid"
    if (!password) return "Password is invalid"
    if (!fullName) return "Name should not be blank"

    return null
}