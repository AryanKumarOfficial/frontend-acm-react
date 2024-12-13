import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    name: "2M+ Weekly Framer Motion Users.",
    description:
      "Framer Motion is one of the most popular animation library for React. Find some quick and easy to use animations for your next project.",
    icon: () => (
      <span role="img" aria-label="heart">
        ❤️
      </span>
    ),
  },
  {
    name: "Easy Integration.",
    description:
      "All the variants are super easy to integrate into your own project. Just copy and paste.",
    icon: () => (
      <span role="img" aria-label="heart">
        ❤️
      </span>
    ),
  },
  {
    name: "Beautiful Animations.",
    description:
      "Hand crafted animations that are simple, subtle, and beautiful.",
    icon: () => (
      <span role="img" aria-label="heart">
        ❤️
      </span>
    ),
  },
];

const Info = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="overflow-hidden py-24 sm:py-32 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                <motion.h2
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="text-base font-semibold leading-7 text-gray-700"
                >
                  Get started quickly
                </motion.h2>
                <motion.p
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  Beautiful Framer Motion Animations
                </motion.p>
                <motion.p
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="mt-6 text-lg leading-8"
                >
                  Ready to use animations for your next project. Just copy and
                  paste.
                </motion.p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.name}
                      variants={FADE_DOWN_ANIMATION_VARIANTS}
                      className="relative pl-9"
                    >
                      <dt className="inline font-semibold">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-gray-700" />
                        {feature.name}
                      </dt>
                      <dd className="inline">{feature.description}</dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>
            </div>
          </div>
          <div className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0">
            <img
              src="/landing.jpeg"
              alt="Product screenshot"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
