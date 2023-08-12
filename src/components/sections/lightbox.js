import * as React from "react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import FsLightbox from "fslightbox-react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ImageGallery = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    const [toggler, setToggler] = useState(false)
    const data = useStaticQuery(graphql`
        query LightboxQuery {
            allFile(filter: {relativeDirectory: {eq: "lightbox"}}) {
                edges {
                  node {
                    id
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                }
            }
        }
    `)
    return (
        <section id="lightbox" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-semibold mb-2">Past Projects</h2>
                <div className="w-10 mx-auto border-b-4 border-blue-800 mb-8"></div>
                <div className="flex">
                    {
                        data.allFile.edges.map((edge => {
                            return (
                                <div className="px-1" onClick={() => setToggler(!toggler)}>
                                    <GatsbyImage 
                                        image={edge.node.childImageSharp.gatsbyImageData}
                                    />
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
            <FsLightbox
                toggler={toggler}
                sources={[
                    "/static/fc4ba4f08c8462fb507f90ef519ea6de/lightbox1.webp",
                    "/static/f556028b0d7152fb08c32a052876b23b/lightbox2.webp",
                    "/static/381ccd50386a900ff518248e0f620b60/lightbox3.webp",
                    "/static/e4fe322c791476a6afc8dbf709a7fa8d/lightbox4.webp",
                    "/static/89ff747ce17add8cc69bee69f90c2560/lightbox5.webp"
                ]}
            />
        </section>
    )
}

export default ImageGallery