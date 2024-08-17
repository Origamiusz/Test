import Image from 'next/image'
 
export default function foto() {
  return (
    <Image
      src="./public/images/example.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}