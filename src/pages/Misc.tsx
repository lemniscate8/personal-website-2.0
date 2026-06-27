import Banner from '../components/Banner'
import NavBar from '../components/NavBar'


function Misc() {
    return <div >
        <Banner />
        <div className="flex flex-row">
            <NavBar />
            <div className='flex-1'>
                <p>
                    Miscellaneous stuff
                </p>
            </div>
        </div>
    </div>
}


export default Misc
