'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PartnerSection } from '@/components/home/PartnerSection';
import TypewriterHeading from '@/components/common/TypewriterHeading';


export default function AboutContent() {
  return (
    <main className="flex flex-col gap-12 bg-[#f8fbff]">
      {/* Hero Section */}
      <section className="container mx-auto px-5 py-16 lg:flex lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <Image
            src="https://mezzex.com/images/about-us.png"
            alt="About us"
            width={560}
            height={400}
            className="rounded-lg object-cover hover:shadow-lg transition-shadow duration-300"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-1/2 space-y-6 hover:scale-105 transition-transform duration-300"
        >
        <TypewriterHeading
  words={[
    'With Mezzex',
    'About Us',
    'Grow Your Business',
    'Build Your Future',
  ]}
/>
          <p className="text-lg text-gray-600">
            Through our parent company, Ultior Ultimate Performance Pvt. Ltd,
            Mezzex, a full‑service IT company that was founded in 2015 with only
            eight clients and a team of three dedicated IT professionals on board.
            Since then, our client base has seen tremendous growth due to our
            dedication to delivering perfect results. Today, the Mezzex team
            includes experienced web professionals and a friendly customer service
            team who diligently serve a large client base around the world.
          </p>
          <p className="text-lg text-gray-600">
            Mezzex was created with the aim to offer affordable and high‑performance
            branding and sales enablement services using proven and progressive
            data‑driven solutions. Our simple mission: maximize your growth in a
            cost‑effective way. As your leading IT and e‑commerce service provider,
            we promise to work hard and not give up until the objectives are
            achieved.
          </p>
        </motion.div>
      </section>

      {/* Process / Values */}
      <section className="w-full bg-gray-200 hover:shadow-lg transition-shadow duration-300">
        <div className="container mx-auto px-5 py-12">
          <div className="text-center mb-10">
                      <h2 className="text-3xl font-bold text-[#0f172a] hover:text-[#1d4ed8] transition-colors duration-300">
            We are a committed team and this is why you should partner with Mezzex.
          </h2>
          <p className="text-gray-600">
            Committed to delivering high‑quality web development and e‑commerce services
          </p>
        </div>
 
       

        {/* DNA Attributes */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0f172a]">Our DNA Attributes</h3>
            <p className="text-gray-600">
              Mezzex embodies a combination of technology, data science, and human
              intellect to provide clients with superlative service quality delivering
              perfect results, and that too at affordable prices!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://mezzex.com/images/where-creativity-web-design.jpg"
              alt="where creativity web design"
              width={560}
              height={360}
              className="rounded-lg object-cover hover:shadow-lg transition-shadow duration-300"
            />
          </motion.div>
        </div>

        {/* Excellence */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12 hover:shadow-xl transition-shadow duration-300">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://mezzex.com/images/excellence.jpg"
              alt="excellence"
              width={560}
              height={360}
              className="rounded-lg object-cover hover:shadow-lg transition-shadow duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0f172a]">Excellence</h3>
            <p className="text-gray-600">
              What binds Mezzex into a unified and single team is the continuous
              commitment to excellence. Our clients should expect pure excellence
              from discovery, planning to implementation.
            </p>
          </motion.div>
        </div>

        {/* Integrity */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0f172a]">Integrity</h3>
            <p className="text-gray-600">
              At Mezzex, our way of life is to do the right thing. This is why we
              make sure that our clients experience complete transparency with
              accountability for every action and every initiative related to their
              campaign.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://mezzex.com/images/integrity.jpg"
              alt="integrity"
              width={560}
              height={360}
              className="rounded-lg object-cover hover:shadow-lg transition-shadow duration-300"
            />
          </motion.div>
        </div>

        {/* Resilience */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://mezzex.com/images/resilience.jpg"
              alt="Resilience"
              width={560}
              height={360}
              className="rounded-lg object-cover hover:shadow-lg transition-shadow duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0f172a]">Resilience</h3>
            <p className="text-gray-600">
              Mezzex is driven by unhesitating resilience to come up with the best
              solution for our execution initiatives to adapt to a constantly evolving
              digital world. Our flexibility to change helps you stay updated.
            </p>
          </motion.div>
        </div>

        {/* Innovation */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#0f172a]">Innovation</h3>
            <p className="text-gray-600">
              Our Mezzex team structure ensures that every project receives the best
              innovative approach it deserves, with all the efforts precisely aligned
              with client goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://mezzex.com/images/innovation.jpg"
              alt="Innovation"
              width={560}
              height={360}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
 </div>
      </section>

      {/* Find Us */}
      <section className="bg-[#fff] py-16 hover:shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Find us.</h2>
          <p className="mb-6 text-lg text-gray-700">
            Spacebox Business Park Unit E 38, Plume Street Birmingham B6 7RT.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="https://mezzex.com/images/buildding-office.jpg"
                alt="building office"
                width={560}
                height={360}
                className="rounded-lg object-cover"
                priority
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps?q=Spacebox+Business+Park+Unit+E+38,+Plume+Street,+Birmingham,+B6+7RT&output=embed"
                className="w-full h-full rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      
       <div className='py-4'>
           <PartnerSection />   
       </div>
       
    </main>
  );
}



