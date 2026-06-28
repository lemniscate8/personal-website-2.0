import Banner from '../components/Banner'
import NavBar from '../components/NavBar'


function Research() {
    return <div >
        <Banner />
        <div className="block md:flex md:flex-row">
            <NavBar />
            <div className='grow p-4 max-w-xlg'>
                <section>
                    <h2>Overview</h2>
                    <p className='pb-4'>
                        Broadly, I study inverse problems in imaging and explore algorithms to recover signals in high noise regimes.
                    </p>
                    <h2>Publications and Preprints</h2>

                    <p className='pb-4'>
                        <em className=" font-semibold">Beyond Frequency Marching: Orbit Recovery in Dihedral and Projected Multireference Alignment </em><br />
                        arXiv preprint, 2026<br />
                        Tait Weicht and Alexander S. Wein<br />
                        <div className='mt-1 flex gap-2'>
                            <a href='https://arxiv.org/abs/2606.11701' className="bg-sky-200 text-sky-500 rounded p-1 px-2 hover:underline hover:text-sky-600">arXiv link</a>
                        </div>
                    </p>
                    <p className='pb-4'>
                        <em className="font-semibold">Improving the Threshold for Finding Rank-1 Matrices in a Subspace</em><br />
                        arXiv preprint, 2026<br />
                        Jeshu Dastidar, Tait Weicht and Alexander S. Wein<br />
                        <div className='mt-1 flex gap-2'>
                            <a href='https://arxiv.org/abs/2504.17947' className="bg-sky-200 text-sky-500 rounded p-1 px-2 hover:underline hover:text-sky-600">arXiv link</a>
                        </div>
                    </p>
                </section>
            </div>

        </div>
    </div>
}


export default Research
