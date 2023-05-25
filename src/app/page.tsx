import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center w-full'>
      <section id='inicio' className="flex flex-col w-full h-[955px] items-center relative">

        <div className='flex justify-between w-[1110px] py-3'>
          <Image src={'/JujaArtsLogo.svg'} alt='' width={141} height={66} />
          <ul className='flex flex-row text-xl text-primary gap-7 items-center'>
            <li><a href='#Main'>Sobre</a></li>
            <li>Como funciona?</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </div>

        <div className='flex h-full justify-between items-center w-[1110px] relative'>
          <div className='flex flex-col gap-28'>
            <div>
              <h1 className='text-5xl text-text'>Transforme sua</h1>
              <h1 className='text-5xl text-primary'>História de Amor</h1>
              <h1 className='text-5xl text-text'>Em uma</h1>
              <h1 className='text-5xl text-primary'>Obra de Arte Digital</h1>
            </div>

            <a href="#serviços" className='w-fit bg-primary rounded-lg px-8 py-5 font-light text-3xl text-white'>
              Conheça meus Serviços!
            </a>
          </div>


          <Image className='-right-16 top-1/2 -translate-y-1/2 absolute ' src='/HeroImage.svg' alt='' width={700} height={700} />

        </div>

        <div id="radial-top"></div>
        <div id="radial-bottom"></div>
      </section>


      <section id='Main' className="flex flex-col bg-light w-full h-[650px] items-center relative">

        <div id="radial-top"></div>
        <div id="radial-bottom"></div>
      </section>

      <section id='Main' className="flex flex-col w-full h-[850px] items-center relative">

        <div id="radial-top"></div>
        <div id="radial-bottom"></div>
      </section>

      <section id='Main' className="flex flex-col bg-light w-full h-[650px] items-center relative">

        <div id="radial-top"></div>
        <div id="radial-bottom"></div>
      </section>

      <section id='Main' className="flex flex-col w-full h-[500px] items-center relative">

        <div id="radial-top"></div>
        <div id="radial-bottom"></div>
      </section>

      <section id='Main' className="flex flex-col bg-light w-full h-[100px] justify-center items-center relative">

        <h1 className='text-2xl font-light'>Juja Arts | 2023</h1>
      </section>

    </div>
  )
}
