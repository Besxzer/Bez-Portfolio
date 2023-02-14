import pic from '../images/Bez.jpg'

function About() {
    return(
        <div id="about" className="animate-fade-in flex flex-col md:flex-row w-4/6 items-center m-8">
            <div className="animate-fade-in mb-10 mx-10 w-[200px] aspect-square rounded-full overflow-hidden shrink-0">
                <img src={pic}></img>
            </div>
            <div>
                <h2 className=" text-white text-2xl font-medium">About me</h2>
                <p className="text-justify text-white font-light p-8">
                    Hello I'm Phubest Panthong. I'm 20 years old.You can call me <b>"Bes"</b>. I'm computer science student at Kasetsart University.
                    My interest in web development, software engineer, game developer and investment. and I love cat! (but I don't pet a cat T-T)
                </p>
            </div>
       
        </div>
    )
}

export default About