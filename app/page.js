'use client'

import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ThemeProvider } from '@/components/Material'
import { NavbarSimple } from '@/components/Navbar'
import { Section } from '@/components/Section'
import { useEffect, useState } from 'react'
import { MyCard } from '@/components/MyCard'

// import data
import { services } from '../data/services'
import { reasons } from '../data/reasons'
import { internationalJournals, nationalJournals } from '../data/journals'
import { faqs } from '../data/faqs'
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { Button } from 'react-scroll'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
    
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const IJournals = internationalJournals.map((journal) => {
        return (
            <>
                <Card className="w-[350px] h-[198px] flex-row bg-gray-100">
                    <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 ">
                        <div className=''>
                            <Image src={journal.cover} alt="cover" width={764} height={1080} />
                        </div>
                    </CardHeader>
                    <CardBody className='p-2 flex flex-col justify-center'>
                        <Typography color="black" className="text-base font-medium capitalize mb-3">
                            {journal.name}
                        </Typography>
                        <Typography color="blue-gray" className="text-sm font-medium mb-1">
                            published:
                        </Typography>
                        <Typography color="gray" className="text-sm font-normal mb-4">
                            { journal.date }    
                        </Typography>
                        <Link href={journal.link} className="group flex flex-row items-center gap-2">
                            <div className='text-sm font-medium text-blue-600 group-hover:text-blue-300'>Learn More</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4 text-blue-600 group-hover:text-blue-300"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                                </svg>
                        </Link>
                    </CardBody>
                </Card>
            </>
        )
    })

    const NJournals = nationalJournals.map((journal) => {
        return (
            <>
                <Card className="w-[350px] h-[198px] flex-row bg-gray-100">
                    <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 ">
                        <div className=''>
                            <Image src={journal.cover} alt="cover" width={764} height={1080} />
                        </div>
                    </CardHeader>
                    <CardBody className='p-2 flex flex-col justify-center'>
                        <Typography color="black" className="text-base font-medium capitalize mb-3">
                            {journal.name}
                        </Typography>
                        <Typography color="blue-gray" className="text-sm font-medium mb-1">
                            published:
                        </Typography>
                        <Typography color="gray" className="text-sm font-normal mb-4">
                            { journal.date }    
                        </Typography>
                        <Link href={journal.link} className="group flex flex-row items-center gap-2">
                            <div className='text-sm font-medium text-blue-600 group-hover:text-blue-300'>Learn More</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4 text-blue-600 group-hover:text-blue-300"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                                </svg>
                        </Link>
                    </CardBody>
                </Card>
            </>
        )
    })

    return (
        <ThemeProvider>
            <NavbarSimple />
            <main className="">

                <Header />

                <Hero />

                <Section title="Our Services" color="blue-50" id="Service">
                    <div className="grid gap-12 sm:px-16 lg:grid-cols-2 xl:grid-cols-3">
                        {services.map((service) => {
                            return(
                                <MyCard 
                                    title={service.title}
                                    content={service.content}
                                    icon={service.icon}
                                    key={service.id}
                                />
                            )
                        })}
                    </div>
                </Section>

                <Section title="Why Choose Us" color="white">
                    <div className="grid gap-12 sm:px-16 lg:grid-cols-2 xl:grid-cols-3">
                        {reasons.map((reason) => {
                                return(
                                    <MyCard 
                                        title={reason.title}
                                        content={reason.content}
                                        icon={reason.icon}
                                        key={reason.id}
                                    />
                                )
                        })}
                    </div>
                </Section>

                <Section title="Westscience International Journals" color="blue-50" id="IJournal">
                    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-16">
                        {IJournals}
                    </div>
                </Section>

                <Section title="Westscience National Journals" color="white" id="NJournal">
                    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-16">
                        {NJournals}
                    </div>
                </Section>

                <Section title="Contact Us" color="blue-50" id="Contact">
                    <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 w-[100%] lg:px-0 xl:px-24 2xl:px-48">
                        <div className="p-4 flex flex-col space-y-4 shadow-xl bg-white border-y-4 border-blue-400 rounded-md w-[100%] sm:px-8 lg:w-2/5">
                            <div className="flex flex-row lg:mt-12">
                                <div className="rounded-full w-14 h-14 bg-blue-100 p-2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1d4ed8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="18" y1="6" x2="18" y2="6.01" />
                                        <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                                        <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                                        <line x1="9" y1="4" x2="9" y2="17" />
                                        <line x1="15" y1="15" x2="15" y2="20" />
                                    </svg>
                                </div>
                                <div className="flex flex-col ml-2">
                                    <div className="text-xl">Location</div>
                                    <div className="text-lg text-gray-400">Jakarta, Indonesia</div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="rounded-full w-14 h-14 bg-blue-100 p-2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1d4ed8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                </div>
                                <div className="flex flex-col ml-2">
                                    <div className="text-xl">Email</div>
                                    <div className="text-lg text-gray-400">info@westscience-press.com</div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="rounded-full w-14 h-14 bg-blue-100 p-2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1d4ed8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                        <path d="M15 7a2 2 0 0 1 2 2" />
                                        <path d="M15 3a6 6 0 0 1 6 6" />
                                    </svg>
                                </div>
                                <div className="flex flex-col ml-2">
                                    <div className="text-xl">Call</div>
                                    <div className="text-lg text-gray-400">+62 821-1557-5700</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-xl border-y-4 border-blue-400 rounded-md p-8 mt-10 w-[100%] lg:w-3/5">
                            <form action="" method="post">
                                <div className="md:flex items-center lg:mt-10">
                                    <div className="w-full md:w-1/2 flex flex-col">
                                        <label className="font-semibold leading-none text-gray-900">Name</label>
                                        <input type="text" className="leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 border-0 bg-gray-white rounded" />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                        <label className="font-semibold leading-none text-gray-900">Email</label>
                                        <input type="email" className="leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 border-0 bg-gray-white rounded"/>
                                    </div>
                                </div>
                                <div className="md:flex items-center mt-8">
                                    <div className="w-full flex flex-col">
                                        <label className="font-semibold leading-none text-gray-900">Subject</label>
                                        <input type="text" className="leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 border-0 bg-gray-white rounded"/>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div className="w-full flex flex-col mt-8">
                                        <label className="font-semibold leading-none text-gray-900">Message</label>
                                        <textarea type="text" className="h-40 text-base leading-none ring-1 ring-gray-300 text-gray-800 p-3 focus:outline-none focus:ring-blue-400 mt-4 bg-gray-white border-0 rounded"></textarea>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-400 rounded hover:bg-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-none">
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Section>

            </main>
            <Footer />
        </ThemeProvider>
    )
}
