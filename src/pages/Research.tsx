import Banner from '../components/Banner'
import LinkPill from '../components/LinkPill'
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
                        <div className='mt-1 flex gap-2 flex-wrap'>
                            <LinkPill href='https://arxiv.org/abs/2606.11701'>arXiv link</LinkPill>

                        </div>
                    </p>
                    <p className='pb-4'>
                        <em className="font-semibold">Improving the Threshold for Finding Rank-1 Matrices in a Subspace</em><br />
                        arXiv preprint, 2026<br />
                        Jeshu Dastidar, Tait Weicht and Alexander S. Wein<br />
                        <div className='mt-1 flex gap-2 flex-wrap'>
                            <LinkPill href='https://arxiv.org/abs/2504.17947'>arXiv link</LinkPill>

                        </div>
                    </p>
                </section>
            </div>
        </div>
    </div>
}


export default Research
