import AuthService from "../services/api/auth/authService";

export const login = (email, password) => async (dispatch) => {
    try {
        let payload = {
            email: email,
            password: password
        }
        const authService = new AuthService();
        const response = await authService.signIn(payload);
    
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {'message' : 'Sucess'},
          })

        return response
    } catch (error) {
        console.log(error)
    }
   
}