import Card from "./Card"

function Projects() {
    return(
        <div>
            <h1 id="projects" className="text-white text-3xl font-medium">Projects</h1>
            <div className="grid md:grid-cols-2">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Projects