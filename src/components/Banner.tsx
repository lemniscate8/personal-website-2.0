import banner from "../assets/banner.jpg"

function Banner() {
    return <img src={banner} className="hidden sm:block mask-b-from-70% print-hidden"></img>
}

export default Banner
