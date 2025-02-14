import Title from "./Title"
import testimonial from "../assets/testimonial.png"


const About = () => {
    return (
        <section>
            {/*Container */}
            <div>
                {/*Testimontial */}
                <div>
                    <Title title1={'People'} title2={'Says'} title1Styles={'h3'} />
                    <img src={testimonial} alt="" height={55} width={55} className="rounded-full" />
                    <h4 className="h4 mt-6">John Doe</h4>
                    <p>CEO At TechStack</p>
                </div>
            </div>
        </section>
    )
}

export default About