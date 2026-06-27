import Banner from '../components/Banner'
import NavBar from '../components/NavBar'


function Teaching() {
    return <div >
        <Banner />
        <div className="flex flex-row p-4">
            <NavBar />
            <section className='grow px-8'>
                <h2>Teaching</h2>
                <p>
                    Here's where my teaching stuff will go
                </p>
            </section>
        </div>
    </div>
}


export default Teaching
