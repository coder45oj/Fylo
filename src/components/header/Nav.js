import React from 'react';
import logo from '../images/logo.svg';


const Nav = () => {
    return (
        <nav>
        <img src={logo} alt="" class="headspace"/>
        <ul>
            <li><a href="homepage.html"></a>Home</li>
            <li><a href="signin.html"></a>Sign In</li>
            <li><a href="post.html"></a>Post</li>
        </ul>
    </nav>

    )
}

export default Nav;