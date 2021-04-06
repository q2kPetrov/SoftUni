import React from "react";
import image from '../../images/404.png'

const ErrorPage = () => {
    return (
        <div>
            <div>The page you're looking for is missing. Are you missing something? </div>;
            <img alt="" src={image}></img>
        </div>
    )
}
export default ErrorPage;
