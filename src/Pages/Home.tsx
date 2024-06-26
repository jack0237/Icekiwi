import Nav from '../Components/Nav/Nav'
import '../styles/Home.css'
import Heroimg from '../assets/Heroimg.png'
import AboutImg from '../assets/aboutimg.png'
import Computer from '../assets/Computer.png'
import circles from '../assets/circles.png'

import reactjs from '../assets/tech/reactjs.png'
import mongodb from '../assets/tech/mongodb.png'
import git from '../assets/tech/git.png'
import figma from '../assets/tech/figma.png'
import docker from '../assets/tech/docker.png'
import typescript from '../assets/tech/typescript.png'

const Home = () => {
  return (
    <>
      <div className='main-hero'>
        <Nav />
        <div className=' hero padding-body flex'>
          <div className='hero-left'>
            <h1>Transformez Votre Vision En Réalité  Avec <span>IceKiwi.</span></h1>
            <p>Chez IceKiwi, nous comprenons que le succès de votre entreprise dépend
              de la performance et de la fiabilité de vos systèmes informatiques.
              C'est pourquoi nous offrons une gamme complète de services informatiques
              personnalisés pour répondre à vos besoins spécifiques.
            </p>
            <div className='left-button flex'>
              <button className='button'>Nous Contecter</button>
              <button className='button left-button2'>Nos services</button>
            </div>
          </div>
          <img src={Heroimg} alt="" />
        </div>

        <div>
          <div className='brand_msg'>
            <div className='section_content'>
              <div>
                <div className="cornners">
                  <i className="fa-solid fa-chevron-right"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <p>
                  Découvrez <span>l&apos;excellence</span> du développement avec IceKiwi,
                  votre partenaire innovant pour des solutions <span>numériques de pointe.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div>
        <div className='about flex padding-body  mb'>
          <img src={AboutImg} alt="" />
          <div>
            <h2>Qui somme Nous ?</h2>
            <h1>Nous vous accompagnons</h1>
            <p>
              IceKiwi est une startup reunissant plusieur develooperus qui vous propose des solutions digital pour vos probleme..... <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
            </p>
            <button className='button'>Nous Contacter</button>
          </div>
        </div>

        <div className='services flex padding-body mt mb'>
          <div>
            <h2>Nos services</h2>
            <h1>Decouvrez des solution adapte a vos besoins</h1>
            <p>
              Nous vouz poroposons diverces services selon votre
              besoin. <br />
              Nous creeons des applications et des sites sur mezure et
              resonsif addapté a vos besoins en un temps record.
            </p>
          </div>
          <img src={Computer} alt="" />
        </div>

      </div>

      {/* circles */}

      <div className='circle'>
        <h1>technologies utilisé</h1>
        <h2>les outilles et plateforme de <br /><span>pointe</span>  utilisé</h2>
        <p>À travers l'utilisation de technologies de pointe et de CMS, nous nous engageons à élaborer <br /> des produits fiables et sécurisés pour vous.</p>
        <img src={circles} alt="" />
        <div className='circle-techs'>
          <img src={git} alt="" />
          <img src={figma} alt="" />
          <img src={docker} alt="" />
          <img src={mongodb} alt="" />
          <img src={reactjs} alt="" />
          <img src={typescript} alt="" />
        </div>
      </div>

      {/* experience time span card */}

      <div className='experience'>
        <div className='experience-card'>
          <div>
            <div >10</div>
            <span>Annee d’experiance</span>
          </div>
          <div>
            <div >20</div>
            <span>Clients Satisfait</span>
          </div>
          <div>
            <div >3</div>
            <span>Membres actif</span>
          </div>
          <div>
            <div >4</div>
            <span>Projets Realisé</span>
          </div>
        </div>
      </div>

      {/* Pourquoi nous choisir */}

      <div className='cards-section'>
        <h1>Pourquoi Nous Choisir</h1>
        <div className='cards'>
          <div>
            <span><i className="fa-solid fa-clock-rotate-left"> </i>&nbsp;Livraison Dans Les Délais</span>
            <p>La gestion du temps est notre priorité.
              Nous veillons à toujours respecter les délais et nous tenons tous nos clients informés de chaque étape de leur projet.</p>
          </div>
          <div>
            <span> <i className="fa-solid fa-briefcase"></i>&nbsp;Travaille de qualaité</span>
            <p>Nous vouz poroposons diverces services selon votre besoin.
              Nous creeons des applications et des sites sur mezure et resonsif addapté a vos besoins en un temps record.</p>
          </div>
          <div>
            <span><i className="fa-solid fa-shield-halved"></i>&nbsp;Hautement sécurisé</span>
            <p>Viaziza assure en priorité la confidentialité, l’intégrité et la disponibilité des applications à chaque étape du processus de développement du logiciel. La sécurité est notre priorité absolue.</p>
          </div>

        </div>
      </div>

      <footer>
        <h1>Icekiwi</h1>
        <hr />
        <ul>
          <li>Instagram &nbsp;<i className="fa-solid fa-arrow-up"></i></li>
          <li>Facebook &nbsp;<i className="fa-solid fa-arrow-up"></i></li>
          <li>&copy; Icekiwi 2024</li>
          <li>Mails news &nbsp;<i className="fa-solid fa-arrow-up"></i></li>
          <li>Whatsapp &nbsp;<i className="fa-solid fa-arrow-up"></i></li>
        </ul>
      </footer>

    </>
  )
}

export default Home
