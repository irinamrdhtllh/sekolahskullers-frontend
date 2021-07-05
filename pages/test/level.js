import Level from '../../components/Level.js';
import image from '../../public/images/image.jpg';

export default function LevelTest() {
  const level = "First Mate";

  return <Level level_logo={image} level={level}/>;
}
