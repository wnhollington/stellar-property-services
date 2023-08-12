import * as React from "react"
import Hammer from "../../images/svg/hammer.svg"
import Screwdriver from "../../images/svg/screwdriver.svg"
import Paintbrush from "../../images/svg/paintbrush.svg"
import { useInView } from "react-intersection-observer"

const Services = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="services" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="mt-4 text-3xl font-semibold text-gray-800 text-center mb-2">Handyman Services Provided</h2>
                <div className="w-10 mx-auto border-b-4 border-blue-800 mb-8"></div>
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="bg-slate-100 rounded-full h-28 w-28 flex align-middle justify-center mx-auto"><Screwdriver style={{height: 72,  margin: 'auto'}} /></div>
                        <h3 class="mt-4 text-xl font-semibold text-gray-800 text-center">Simple Repairs</h3>

                        <p class="mt-2 text-gray-500 text-lg">Simple repairs and small projects. I'm always available to help. From clearing trash and tree limbs to drywall repair and paint and most things in between.</p>
                    </div>

                    <div>
                        <div className="bg-slate-100 rounded-full h-28 w-28 flex align-middle justify-center mx-auto"><Hammer style={{height: 72,  margin: 'auto'}} /></div>

                        <h3 class="mt-4 text-xl font-semibold text-gray-800 text-center">Home Updates</h3>

                        <p class="mt-2 text-gray-500 dark:text-gray-400 text-lg">Updating sinks, faucets, countertops, vanities, light switches, light fixtures, trim, baseboards, paint, etc. Upgrade that room with a little work and newer products to change the look of your house.</p>
                    </div>

                    <div>
                        <div className="bg-slate-100 rounded-full h-28 w-28 flex align-middle justify-center mx-auto"><Paintbrush style={{height: 72,  margin: 'auto'}} /></div>
                        <h3 class="mt-4 text-xl font-semibold text-gray-800 text-center">Other Services</h3>

                        <p class="mt-2 text-gray-500 text-lg">Here at Stellar we offer many other services. These include but are not limited to; window cleaning, window replacement, general handyman, painting, drywall, light fixture upgrades, faucet upgrades, power washing, gutter cleaning, tiling, blind installation, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services