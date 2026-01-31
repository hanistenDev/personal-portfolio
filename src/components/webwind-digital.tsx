import { Section } from "./ui/section"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function WebwindDigital() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Custom Website Development",
      description:
        "Professional, responsive websites built with cutting-edge technologies to deliver exceptional user experiences.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Powerful online stores with seamless checkout processes and comprehensive inventory management.",
    },
    {
      title: "Digital Marketing Strategies",
      description:
        "Data-driven marketing approaches to increase visibility and drive sustainable business growth.",
    },
    {
      title: "Brand Identity and Design",
      description:
        "Compelling visual identities that communicate your brand's values and resonate with your target audience.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <Section
      id="webwind"
      title="Webwind Digital"
      subtitle="Growing Your Business Online"
    >
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            As a co-founder of Webwind Digital, based in Zürich, Switzerland, we help businesses grow by 
            creating tailored digital solutions that elevate your online presence. Our team specializes 
            in building scalable websites and innovative digital strategies that drive more customers to 
            your business, boost engagement, and increase conversions.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="group bg-card border-border hover:border-violet transition-all duration-300 
                hover:shadow-2xl hover:scale-[1.03] hover:bg-violet/5 relative overflow-hidden h-full">
                <CardContent className="p-6 relative z-10">
                  <h3 className="font-semibold mb-3 text-lg text-foreground group-hover:text-violet 
                    transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-tr from-violet/10 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
