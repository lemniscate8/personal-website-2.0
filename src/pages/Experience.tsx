import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import resume from '../assets/Resume Math 7.0.pdf'
import cv from '../assets/CV.pdf'

function Experience() {
    return <div>
        <Banner />
        <div className="block md:flex md:flex-row">
            <NavBar />
            <section className='grow p-4'>
                <h2>Resume</h2>
                <p>
                    Coming soon: a filterable and searchable CV/resume<br />
                    For now, here are static files.
                </p>
                <div className='mt-1 flex gap-2'>
                    <a href={resume} className="bg-sky-200 text-sky-500 rounded p-1 px-2 hover:underline hover:text-sky-600">Resume</a>
                    <a href={cv} className="bg-sky-200 text-sky-500 rounded p-1 px-2 hover:underline hover:text-sky-600">CV</a>
                </div>
            </section>
        </div>
    </div>
}


export default Experience
