import Banner from '../components/Banner'
import NavBar from '../components/NavBar'


function Research() {
    return <div >
        <Banner />
        <div className="flex flex-row p-4">
            <NavBar />
            <div className='flex-1'>
                <p>
                    Research goes here
                </p>
            </div>
        </div>
    </div>
}


export default Research
