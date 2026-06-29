import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import resume from '../assets/Resume Math 7.0.pdf'
import cv from '../assets/CV.pdf'
import TimelineView from '../components/TimelineView'
import resumeJSON from "../assets/resume.json"
import LinkPill from '../components/LinkPill'

function Experience() {
    return <div>
        <Banner />
        <div className="block md:flex md:flex-row">
            <NavBar />
            <section className='grow p-4 md:max-w-3/4'>
                <h2>Resume and CV</h2>
                <p>
                    TL;DR? Static files below!
                </p>
                <div className='mt-1 flex gap-2 pb-4'>
                    <LinkPill href={resume}>Resume</LinkPill>
                    <LinkPill href={cv}>CV</LinkPill>
                </div>
                <h1>Timeline</h1>
                <TimelineView experience={resumeJSON} />
            </section>
        </div>
    </div>
}


export default Experience
