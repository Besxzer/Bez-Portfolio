import FacebookIcon from '../images/facebook-icon.svg'
import GithubIcon from '../images/github-icon.svg'
import InstagramIcon from '../images/instagram-icon.svg'

function Contact() {
    return (
        <div id="contact" className="text-white m-5">
            <h2 className="text-3xl font-medium">Contact</h2>
            <div className="font-light m-8">
                <a href="https://www.instagram.com/besxzer/">
                    <button className="p-3 m-2 border rounded-lg">
                        <img src={InstagramIcon} 
                        alt="instagramIcon" 
                        className="w-8 inline pr-2"></img>
                        Instagram</button>     
                </a>    

                <a href="https://www.facebook.com/phubestpanthong/">
                    <button className="p-3 m-2 border rounded-lg">
                        <img src={FacebookIcon} 
                        alt="facebookIcon" 
                        className="w-8 inline pr-2"></img>
                        Facebook</button>  
                </a>   
                  
                <a href="https://github.com/Besxzer"> 
                    <button className="p-3 m-2 border rounded-lg">
                        <img src={GithubIcon} 
                        alt="githubIcon" 
                        link=""
                        className="w-8 inline pr-2"></img>
                        Github</button>   
                </a>      
            </div>
        
        </div>
    )
}

export default Contact