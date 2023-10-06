import Image from 'next/image'
import React from 'react'
import {
    Typography,
} from "@/components/Material";

export const Hero = () => {
    return (
        <div className='container mx-auto py-40 px-4' id="About">
            <div className='flex flex-col lg:flex-row '>
                {/* <Fade bottom> */}
                    <div className='flex flex-col px-4 text-justify mt-16 md:px-18 lg:w-1/2 lg:mt-0 lg:justify-center'>
                        <div className='text-3xl font-semibold lg:text-2xl xl:text-4xl'>Westscience Press</div>
                        <div className='text-base xl:text-lg mt-4'>Westscience Press is a fast and reliable institution for publishing national and international journals with various scopes. Westscience Press focuses on helping students, teachers, lecturers, and academics. In addition, Westscinece Press has the service of publishing leading conference proceedings annually.</div>
                    </div>
                {/* </Fade> */}
                <div className='relative flex mx-auto order-first w-[340px] h-[200px] lg:w-1/2 lg:ml-12 lg:h-[250px] xl:h-[305px] 2xl:h-[360px] 2xl:mr-12'>
                    <Image src="/i2.png" alt="Ilustrasi 2" layout='fill' objectFit="fill"/>
                </div>
            </div>
        </div>
    )
}
