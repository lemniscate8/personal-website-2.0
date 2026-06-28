import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Portrait from '../components/Portrait'
import Link from '../components/Link'

function Home() {
    return <>
        <Banner />
        <div className="block md:flex md:flex-row">
            <NavBar />
            <div className="block sm:flex sm:flex-row">
                <section className='grow p-4'>
                    <h2>Hi, I'm Tait Weicht</h2>
                    <p>
                        I'm currently a PhD candidate at the University of California, Davis.
                        My primary interests are in algorithms for inverse problems in imaging like structure determination cryogenic electron microscopy and phase retrieval in X-ray diffraction.
                        I am especially interested in finding algorithms that can achieve recovery in high noise regimes.
                        I have worked with <Link href="https://www.alex-wein.com/">Dr. Alexander Wein</Link> on some variants of multi-reference alignment and methods for tensor decomposition and with <Link href="https://www.math.ucdavis.edu/~fannjiang/">Dr. Albert Fannjiang</Link> on a model of dose-fractionation in X-ray diffraction and a connection to the statistics of spiked Wishart matrices.
                    </p>
                </section>
                <div className="min-w-1/4 p-4 flex flex-row justify-around align-top">
                    <div className=" shadow-lg p-4 flex flex-row justify-around align-top "><Portrait /></div>
                </div>
            </div>

        </div>
    </>
}


export default Home
