import Tabela from "./components/tabela";  
import Image from 'next/image';
import exampleImage from './images/example.jpg';  // Importing the image

const Home = () => {
  return (
    <div className="kontener">
      <Tabela />
      <div className="foto"><Image src={exampleImage} alt="Example" width={500} height={300} /></div>
    </div>
  );
};

export default Home;