import Banner from '../components/Banner'
import NavBar from '../components/NavBar'


function Research() {
    return <div >
        <Banner />
        <div className="flex flex-row p-4">
            <NavBar />
            <section className='grow px-8'>
                <h2>Research</h2>
                <p>
                    Here's some reasearch
                </p>
            </section>
        </div>
    </div>
}


export default Research
