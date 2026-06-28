import Banner from '../components/Banner'
import NavBar from '../components/NavBar'


function Teaching() {
    return <div >
        <Banner />
        <div className="block md:flex md:flex-row">
            <NavBar />
            <div className='grow p-4'>
                <section>
                    <h2>Teaching</h2>
                    <p>
                        Coming soon: some highlights from of the teaching materials I've created and a list of courses I've taught
                    </p>
                </section>
            </div>
        </div>
    </div>
}


export default Teaching
