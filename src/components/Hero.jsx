import heroImg from '../assets/heroLogo.svg'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ['Seyfaddin', 'Web Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  })
  const text =
    'Through constant practice & learning, I produce aesthetic software to an extremely high standard'

  return (
    <div className="bg-emerald-100 py-36">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-3xl md:text-5xl mx-auto ">
            Hi 👋 I'm <span className="text-amber-400">{typeEffect}</span>
          </h1>
          <p className="mt-2 text-lg text-slate-700  tracking-wide">{text}</p>
          <div className="flex gap-x-2 mt-4">
            <a href="https://github.com/coderseyfi" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/seyfaddin-nacafli-82983620b/"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.instagram.com/nadjaflee/" target="_blank">
              <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  )
}
export default Hero
