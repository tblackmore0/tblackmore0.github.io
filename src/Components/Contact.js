import {gitGreen, gitLight} from './ProjectInstance';


function linkedGreen (e) {
    let img = e.target
    img.src = '/Images/linkedGreen.png';
}

function linkedLight (e) {
    let img = e.target
    img.src = '/Images/linkedLight.png';
}

function Contact () {
    return (
        <div className='contactDiv'>

            <div className='contactDetails'>
                <a className='contactIcon' target="blank" href="https://github.com/tblackmore0">
                        <img onMouseEnter={gitGreen} onMouseLeave={gitLight} alt='' src='/Images/GitHubLight.png' />
                </a>
                <div className='contactText'>
                <h2>Contact</h2>
                <p>tblackmore0@gmail.com</p>
                <p>07516677681</p>
            </div>
                <a className='contactIcon' target="blank" href="https://www.linkedin.com/in/thomas-blackmore-68613217b/">
                        <img onMouseEnter={linkedGreen} onMouseLeave={linkedLight} alt='' src='/Images/linkedLight.png' />
                </a>
            </div>

            <div className='contactForm'>
                <form>
                    <div className='formTop'>
                    <input name='name' placeholder='Name' type='text' />
                    <input name='email' placeholder='Email' type='email' />
                    </div>
                    <div className='formBottom'>
                    <textarea name='message' placeholder='...' />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export { Contact }