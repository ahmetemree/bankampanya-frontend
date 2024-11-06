import { useNavigate } from 'react-router-dom';
import './homepage.scss'
import { motion } from 'framer-motion'
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className='mainwrapper'>
      <div className="cardwrapper">
        <motion.img initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.0}} whileHover={{scale: 1.1}} src="./credit-card.png" alt="" />
        <div className="textwrapper">
          <motion.h3 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.0}} >Kredi Kartı Kampanyaları</motion.h3>
          <motion.button 
            initial={{opacity: 0, y: 100}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 1.5}} 
            whileHover={{scale: 1.1, transition: {duration: 0.2}}} 
            exit={{scale: 1, transition: {duration: 0.2}}}
            onClick={() => navigate('/kampanyalar')}
          >
            Kampanyaları İncele
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Homepage 