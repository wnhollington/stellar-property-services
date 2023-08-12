import * as React from "react"
import { useInView } from "react-intersection-observer"

const Schedule = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="schedule" ref={ref}>
            <div className={`container my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-semibold mb-2">Book Your Appointment Today</h2>
                <div className="w-10 mx-auto border-b-4 border-blue-800 mb-8"></div>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">If you are ready to book us to handle your next home improvement project, please give us a call at the information provided below. We look forward to working with you and earning your business!</p>
                <a href="tel:+3039091227" rel="noreferrer" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Call Now: 303-909-1227</a>
            </div>
        </section>
    )
}

export default Schedule