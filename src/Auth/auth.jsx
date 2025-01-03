import React from 'react';
import './Auth.css';
import SignUpForm from "@/Auth/SignUpForm.jsx";
import {useLocation, useNavigate} from "react-router";
import {Button} from "@/components/ui/button.jsx";
import SignInForm from "@/Auth/SignInForm.jsx";

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <div className="h-screen relative authContainer">
            {/* Background overlay */}
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50"></div>

            {/* Centered form */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-[30rem] rounded-md z-50 bg-black bg-opacity-75 p-10 shadow-2xl shadow-white">
                <h1 className="text-6xl font-bold pb-8 text-white">CrypTrade</h1>
                {location.pathname === "/signUp" ? <section>
                    <SignUpForm/>
                    <div className={"flex items-center justify-center"}>

                        <span>Already Have an Account?</span>
                        <Button onClick={() => navigate("/signIn")} variant={"ghost"}>
                            Sign In
                        </Button>
                    </div>
                </section> : <section>
                    <SignInForm/>
                    <div className={"flex items-center justify-center"}>

                        <span className={"font-sans font-thin"}>Don't Have an Account?</span>
                        <Button onClick={() => navigate("/signUp")} variant={"ghost"}>
                            <span className={"flex items-center"}>Sign Up</span>
                        </Button>
                    </div>
                </section>}
            </div>
        </div>
    );
};

export default Auth;



