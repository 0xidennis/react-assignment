// import file from '../assets/image/file.svg'
// import meet from '../assets/image/meet.svg'
import databiz from '../assets/image/databiz.svg'
// import maker from '../assets/image/maker.svg'
import '../component/Hero.css'
import Image from '../assets/image/Image.png'
const Hero =()=>{
    return(
        <>
        <div className='Hero-container'>
           <div className='hero-text'>
           <h1>
                Make <br />remote work
            </h1>
            <p>Get your team in sync,no matter your location. <br />
            Streamline processes,create team rituals, and watch <br />
            productivity soar.</p>
            <button className='btn4'>Learn more</button>
            <img src={databiz} alt="" className='footer' />
            {/* <img src={meet} alt=""  className='footer'/> */}
            {/* <img src={maker} alt=""  className='footer'/> */}
          
           </div>
           <div className='hero-img'>
            <img src={Image} alt="" width={500} height={530}/>
            </div>
        </div>
        </>
    )
}

export default Hero