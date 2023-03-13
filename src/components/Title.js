import styled from "styled-components";


function Title(props) {
    const user = (user) => {
        return capitalize(user.firstname) + ' ' + capitalize(user.lastname)
    }

    const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    
    return (
        <div>
            <h2>Posts by user { user(props) }</h2>
        </div>
        
    );
}


export default Title


