import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Portrait from '../components/Portrait'


function Home() {
    return <>
        <Banner />
        <div className="flex flex-row p-4">
            <NavBar />
            <div className='flex-1'>
                <p>
                    Testing this!
                </p>
            </div>
            <div className="w-1/4 shadow-lg p-4 flex flex-col justify-around"><Portrait /></div>
        </div>
    </>
}


export default Home
