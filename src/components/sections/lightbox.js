import * as React from "react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import FsLightbox from "fslightbox-react"
import { GatsbyImage } from "gatsby-plugin-image"

const ImageGallery = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    })
    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        })
    }
    const data = useStaticQuery(graphql`
        query LightboxQuery {
            allFile(filter: {relativeDirectory: {eq: "lightbox"}}) {
                edges {
                  node {
                    id
                    childImageSharp {
                        gatsbyImageData(width:500, height:350, layout:FIXED)
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
                <div className="flex gap-4 overflow-x-scroll">
                    {
                        data.allFile.edges.map((edge,index) => {
                            return(
                                <div onClick={() => openLightboxOnSlide(index+1)}>
                                    <GatsbyImage 
                                        image={edge.node.childImageSharp.gatsbyImageData}
                                        imgClassName="rounded-lg shadow-xl bg-white"
                                    />
                                </div>    
                            )  
                        })
                    }                                      
                </div>
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                    "/static/fc4ba4f08c8462fb507f90ef519ea6de/40072/lightbox1.webp",
                    "/static/f556028b0d7152fb08c32a052876b23b/ac291/lightbox2.webp",
                    "/static/381ccd50386a900ff518248e0f620b60/7bef4/lightbox3.webp",
                    "/static/e4fe322c791476a6afc8dbf709a7fa8d/7bef4/lightbox4.webp",
                    "/static/89ff747ce17add8cc69bee69f90c2560/40072/lightbox5.webp",
                ]}
                slide={lightboxController.slide}
            />
        </section>
    )
}

export default ImageGallery