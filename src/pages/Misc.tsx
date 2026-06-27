import Banner from '../components/Banner'
import NavBar from '../components/NavBar'


function Misc() {
    return <div >
        <Banner />
        <div className="flex flex-row">
            <NavBar />
            <section className='grow px-8'>
                <h2>Misc</h2>
                <p>
                    Miscellaneous stuff
                </p>
            </section>
        </div>
    </div>
}


export default Misc
