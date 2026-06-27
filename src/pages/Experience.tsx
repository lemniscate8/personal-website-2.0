import Banner from '../components/Banner'
import NavBar from '../components/NavBar'

function Experience() {
    return <div>
        <Banner />
        <div className="flex flex-row p-4">
            <NavBar />
            <section className='grow px-8'>
                <h2>Resume</h2>
                <p>
                    Eventually a resume here
                </p>
            </section>
        </div>
    </div>
}


export default Experience
