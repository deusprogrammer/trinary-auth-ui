import React, {useEffect} from 'react';

export default () => {
    useEffect(() => {
        let urlParams = new URLSearchParams(window.search);
        let redirect = urlParams.get("to");
        let sep = "?";
        if (redirect.includes("?")) {
            sep = "&";
        }
        window.location = redirect + `${sep}accessToken=${localStorage.getItem("accessToken")}`;
    }, []);

    return (
        <div>Redirecting to your chosen redirect url</div>
    )
}