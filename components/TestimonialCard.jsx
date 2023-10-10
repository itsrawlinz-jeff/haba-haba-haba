import Image from 'next/image'
import Link from 'next/link'


export default function TestimonialCard({img, name, occupation, testimonial}) {
  return (
    <div >
         <div className="self-start col-span-1 row-span-1">
            <div className="text-black whitespace-normal border border-vivid-raspberry  p-0.5 block relative overflow-hidden rounded-lg mb-2.5 ">
              <div className="z-10 w-full h-full rounded-xl py-4 px-4 relative overflow-hidden">
                <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                  <Image
                    src={img}
                    width={120}
                    height={120}
                    alt="avatar"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div>
                    <p className="text-black text-sm font-medium tracking-tight">
                      {name}
                    </p>
                    <p className="text-stone-500 text-sm font-normal tracking-tight">
                      {occupation}
                    </p>
                  </div>
                </Link>
                <p className="text-black text-sm font-normal leading-tight tracking-tight pt-2">
                  {testimonial}
                </p>
              </div>
            </div>
          </div>
    </div>
   
  )
}
