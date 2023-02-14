function Card() {
    return(
        <div className="max-w-[400px] h-[400px] rounded-xl m-6 mt-10 overflow-clip relative shadow-md">
            <div className="p-4 w-full h-3/6 bg-zinc-800 absolute bottom-0 left-0 z-10">
                <h3 className="text-white text-xl font-bold text-left ml-3 mb-2">
                Lorem ipsum dolor sit amet</h3>
                <p className="text-white font-light mx-3 text-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" 
            className="saturate-50 scale-110 object-cover hover:scale-125 hover:saturate-100 ease-out duration-300"></img>
        </div>
    )
}

export default Card