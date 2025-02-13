import React , {useState} from 'react'
import Button from '../components/Button'

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className='c-space my-20 '>

      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full bg-transparent '>

        <div className='col-span-1 xl:row-span-3'>

          <div className='grid-container bg-transparent'>

            <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

            <div>

              <p className='grid-headtext'>Hi, I'm Shantanu</p>
              <p className='grid-subtext'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fugit ex reprehenderit.</p>

            </div>

          </div>

        </div>

        <div className='col-span-1 row-span-3'>

          <div className='grid-container'>

            <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />

            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur.</p>
            </div>

          </div>

        </div>

        <div className='col-span-1 xl:row-span-4'>

          <div className='grid-container'>

            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'> 
                {/* 3d globe thing */}
            </div>

            <div>
                <p className='grid-headtext'>I work Lorem ipsum dolor sit.</p>
                <p className='grid-subtext'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.</p>

                <Button name={"Contactdas me"} isBeam containerClass={'w-full mt-10'}/>

            </div>

          </div>

        </div>

        <div className='xl:col-span-2 xl:row-span-3'>

          <div className='grid-container'>

            <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

            <div>

              <p className='grid-headtext'>Passion Lorem, ipsum.</p>

              <p className='grid-subtext'>Passion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat exercitationem autem odit.</p>


            </div>

          </div>

        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default About
