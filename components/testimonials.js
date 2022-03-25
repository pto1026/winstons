import Testimonial from "./testimonial";
import React from "react";

export default function Testimonials() {
    return (<div className="testimonials">
        <Testimonial
            src="imgs/profile-photo-1.jpg"
            name="Chris Jenkins &mdash; Founder of Arming Kids, America"
        >
            Everything changed once I found Winston&apos;s. Soon my hair grew back,
            my portfolio jumped, and my kids started calling me again. I owe
            everything to Winston&apos;s and their personal import/export
            service. Winston&apos;s got me a Baretta when I need it most, just
            half a mile from the peak of K2 by helicopter care package. Their
            discreet services are better than described.
        </Testimonial>
        <Testimonial
            src="imgs/profile-photo-2.jpg"
            name="Jeff Daley &mdash; Founder of Infidels, Norway"
        >
            This is the best service out there. Not only were my C4 explosives
            delivered right on time, but I also got exclusive, first peek
            access to an amazing piece of technology. The only way to describe
            it is an honest to God lightsaber and it cuts everything from
            pizza, to kevlar, to steel. I also lost a kid last year, and when
            I had no one else to turn to, Winston&apos;s was able to replace
            the child. With overnight shipping!!
        </Testimonial>
        <Testimonial
            src="imgs/profile-photo-3.jpg"
            name="Hillary Best &mdash; the occasional assassin"
        >
            I am most excited to talk about the exclusive sources of goods
            offered by Winston&apos;s. Where else can you buy everything from
            a currency printer, to ancient Japanese artifacts. I frequently
            have deals and orders that can only be filled by Reptilian
            motherships in orbit, and Winston&apos;s makes that easy.
        </Testimonial>
    </div>)
}