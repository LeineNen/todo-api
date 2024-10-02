
// this is how to write a function
export const register = (req, res, next) => {
    res.json('user registered successfully');
}

export const logIn = (req, res, next) => {
    res.json('user logged in successfully');
}

export const logOut = (req, res, next) => {
    res.json('user logged out');
}




