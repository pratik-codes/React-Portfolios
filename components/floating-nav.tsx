"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

export function FloatingNav({ addClass }: any) {
  return (
    <motion.header
      className={`${addClass} z-[100] min-w-fit w-11/12 md:w-7/12 lg:w-3/12 mx-auto mb-4 bg-black base-card border-base rounded-full`}
      initial="initial"
      whileHover="hover"
      animate="initial"
      transition={{ type: 'spring', stiffness: 300, damping: 50 }}
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.1 }
      }}
    >
      <div className="mx-2 my-1 flex items-center sm:justify-between">
        <Link href="/">
          <motion.div
            initial="initial"
            whileHover="hover"
            animate="initial"
            transition={{ type: 'spring', stiffness: 300, damping: 50 }}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.2 }
            }}
          >
            <Image
              width={30}
              height={30}
              src={"https://pbs.twimg.com/profile_images/1843680446153891840/j30OfHJQ_400x400.jpg"}
              className="rounded-full object-cover cursor-pointer mr-2"
              alt="avatar_picture"
            />
          </motion.div>
        </Link>
        <MainNav />
        <div className="ml-8 flex flex-1 items-center justify-end">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                animate="initial"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.2 },
                  exit: { scale: 1 }
                }}
                className={
                  "p-2 rounded-full hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
                }
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                animate="initial"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.2 },
                  exit: { scale: 1 }
                }}

                className={
                  "p-2 rounded-full hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
                }
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </motion.div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                animate="initial"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.2 },
                  exit: { scale: 1 }
                }}
                className={
                  "p-2 rounded-full hover:bg-transparent-white transition-all dark:hover:text-neutral-200 flex align-middle"
                }
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </motion.div>
            </Link>

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}