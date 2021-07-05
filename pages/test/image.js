import Image from 'next/image';

import image from '../../public/images/image.jpg';

console.log(image);

export default function ImageTest() {

  return (
    <>
      <Image src={image} width="200" height="200" alt="image" />
    </>
  );
}
