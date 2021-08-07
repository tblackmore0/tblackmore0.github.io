function About () {
    return (
        <div className='aboutDiv'>
            <img className='aboutImg' alt='Portrait photograph of me, Tom' src='/Images/Portrait.jpeg' />
            <div className ='aboutText'>
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h2>Skills</h2>
                <p>React, Javascript, CSS, SASS/SCSS, HTML, Git/GitHub, Webpack, NPM</p>
            </div>
        </div>
    )
}

export {About}