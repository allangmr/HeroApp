import './LoginScreen.css'
import wonder from '../../img/wonderwoman.png'
import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
export const LoginScreen = () => {
    const history = useHistory();
    const { dispatch } = useContext(AuthContext);
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formState;
    useEffect(() => {
        //console.log('formState cambio');
    }, [formState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const lastPath = localStorage.getItem('lastPath') || '/';
        if (username.length >= 2 && password.length >= 6) {
            dispatch({
                type: types.login,
                payload: { name: username },
            });
            history.replace(lastPath);
        }
    }
    const handleInputChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value })
    }
    return (
        <div className="d-flex flex-column flex-root login bg-login animate__animated animate__fadeIn">
            <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed bg-img-login ">
                <div className="d-flex flex-center flex-column flex-column-fluid pb-lg-20">
                    <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">

                        <form className="form w-100" noValidate="noValidate" onSubmit={handleSubmit}>

                            <div className="text-center mb-10">
                                <picture>
                                    <source srcSet={wonder} />
                                    <img src={wonder} width="400" height="150" alt="Wonder Woman Antifaz" />
                                </picture>
                                <h1 className="text-dark mb-3">Sign In</h1>


                            </div>


                            <div className="fv-row mb-10">
                                <label className="form-label fs-6 fw-bolder text-dark">Username</label>
                                <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="text"
                                    name="username"
                                    autoComplete="off"
                                    value={username}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="fv-row mb-10">
                                <div className="d-flex flex-stack mb-2">
                                    <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                                </div>
                                <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="password"
                                    name="password"
                                    autoComplete="off"
                                    value={password}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="text-center">

                                <button type="submit" className="btn btn-lg btn-primary w-100 mb-5">
                                    <span className="indicator-label">Continue</span>
                                    {/* <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span> */}
                                </button>

                            </div>

                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}
