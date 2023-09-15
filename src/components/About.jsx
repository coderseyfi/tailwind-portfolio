import React from 'react'
import user from '../assets/programmer.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={user} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8">
            I'm a web developer with a passion for the digital world. I'm a
            software engineer who loves creating user-friendly and visually
            appealing websites. I thrive on every project as an opportunity to
            challenge myself and learn new technologies. Collaborating and
            crafting creative solutions is what I enjoy the most. I'm constantly
            working to enhance my skills and make a positive impact in the
            digital realm using my experience in web development.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
