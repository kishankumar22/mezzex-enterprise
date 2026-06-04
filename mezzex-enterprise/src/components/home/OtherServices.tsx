'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const otherServices = [
  {
    title: 'Logo Design',
    image: 'https://mezzex.com/images/logo-design.png',
  },
  {
    title: 'Online Marketing',
    image: 'https://mezzex.com/images/online-marketing.png',
  },
  {
    title: 'Graphic Design',
    image: 'https://mezzex.com/images/graphic-design.png',
  },
  {
    title: 'Ecommerce Business',
    image: 'https://mezzex.com/images/ecommerce-bussiness.png',
  },
  {
    title: 'Lead Generation',
    image: 'https://mezzex.com/images/lead-generation.png',
  },
  {
    title: 'Amazon Seller Account',
    image: 'https://mezzex.com/images/amazon.png',
  },
  {
    title: 'Ebay Seller Account',
    image: 'https://mezzex.com/images/ebay.png',
  },
  {
    title: 'Other Seller Account',
    image: 'https://mezzex.com/images/logo-design.png',
  },
];

export function OtherServices() {
  return (
<section
  className="relative overflow-hidden py-12 md:py-16"
  style={{
    backgroundImage:
      "url('https://mezzex.com/images/other-service-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}
>

   
   

      {/* OVERLAY */}
      <div className="absolute inset-0 " />

      {/* GLOW */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#4BEAFF]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#2f5a84]/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            Our Other Services
          </h2>

          <p className="text-[15px] leading-8 text-orange-300 md:text-base">
            Mezzex believes in creating long-term relationships
            with clients and capable partners. Based on quality,
            consistency and reliability, client satisfaction is
            our driving force.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {otherServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: idx * 0.05,
              }}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                text-center
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#4BEAFF]/40
                hover:bg-white/10
                hover:shadow-2xl
                cursor-pointer
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  mx-auto
                  mb-5
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >

                <Image
                  src={service.image}
                  alt={service.title}
                  width={70}
                  height={70}
                  className="object-contain"
                />

              </div>

              {/* TITLE */}
              <h3 className="text-sm font-semibold leading-6 text-white md:text-base">
                {service.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}