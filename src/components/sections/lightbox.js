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
    var imageSources = []
    return (
        <section id="lightbox" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-semibold mb-2">Past Projects</h2>
                <div className="w-10 mx-auto border-b-4 border-blue-800 mb-8"></div>
                <div className="flex gap-4 overflow-x-scroll">
                    {
                        data.allFile.edges.map((edge,index) => {
                            imageSources.push(edge.node.childImageSharp.gatsbyImageData.images.fallback.src)
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
                sources={imageSources}
                slide={lightboxController.slide}
            />
        </section>
    )
}

export default ImageGallery