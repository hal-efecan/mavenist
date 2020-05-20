import React from 'react'
import about from '../styles/about.module.scss'

const AboutUs = () => {
    return (
        <div className={about.container}>
            <h4 className={about.titles}>What is a Maven?</h4>
            <p>A person who is experienced or knowledgeable in a particular field.</p>
            <h4 className={about.titles}>About</h4>
            <p>
                The Mavenist is a a rough around the edges micro-blog full of character adding spelling mistakes, typos, 
                poor grammer & raw content. It's a destination for those that want to read front line content.
            </p>
            <p>
                It reads like a field report who's purpose is to bring "you" the reader our opinionated and unfiltered 
                perspective.
            </p>
            <p>
                Modern publishing and content creation is based on embellishing & polishing to the extent that the reader only 
                sees stories in their best light.
                At The Mavenist we take the view that we need not filter content for our readers as they're intelligent enough 
                to see through the marketing and false editorial facade. 
                If it's good - we say it is - if it isn't, we say so!
            </p>
            <p>
                The Mavenist is founded by The Maven - A fashion & retail expert that's worked at internationlly renowened 
                fashion houses, brands and retailers a like. A buyer & collection merchandiser by trade with years of experience 
                in luxury fashion and an eye for value and quality - Not simply hype and branding.
            </p>
            <p>
                You can think of "The Maven" like the "Dread Pirate Roberts" from "The Princess Bride". An
                interchangable name handed down over time. There is no ONE Maven.
            </p>

            <h4 className={about.titles}>Affiliate</h4>

            <p>
            The Mavenist occasionly includes affiliate links which pay us a small percentage each 
            time you buy something. This helps us keep the lights on and bring you more of what you enjoy 
            - honest unadultarated content.
            </p>
            <p>
            We only link to brands that we believe in, and never compromise for financial gain.
            </p>
        </div>
    )
}

export default AboutUs
