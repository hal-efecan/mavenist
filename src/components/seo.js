/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
// import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, image: metaImage, title, pathname }) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name,
              summary
            }
            siteUrl
            image
            social { twitter }
          }
        }
      }
    `
  )

  // const { pathname } = useLocation()
  // const { site } = useStaticQuery(query)
  
  // console.log(site.siteMetadata)
  // const { title: defaultTitle, description: defaultDescription, siteUrl, 
  //   image: defaultImage , social: { twitter } } = site.siteMetadata

  const metaDescription = description || site.siteMetadata.description

  // const seo = {
  //   title: title || defaultTitle,
  //   description: description || defaultDescription,
  //   image: `${siteUrl}${image || defaultImage}`,
  //   url: `${siteUrl}${pathname}`,
  // }
  
  const image =
    metaImage // && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage}` // ${metaImage.src}
      : null
      
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (

    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`, // `twitter:image:src`,
          content: site.siteMetadata.image,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
      .concat(
        metaImage
        ? [
            {
              property: "og:image",
              content: image,
            },
            // {
            //   property: "og:image:width",
            //   content: metaImage.width,
            // },
            // {
            //   property: "og:image:height",
            //   content: metaImage.height,
            // },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
          ]
        : [
            {
              name: "twitter:card",
              content: "summary",
            },
          ]
          )
          .concat(meta)
        }
    />

    )

    // return null
}


export default SEO

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
  image: ``,
  article: false
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,

  // image: PropTypes.string,
  // article: PropTypes.bool,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}



// const query = graphql`
// query {
//   site {
//     siteMetadata {
//       title
//       description
//       author {
//         name,
//         summary
//       }
//       siteUrl
//       image
//       social { twitter }
//     }
//   }
// }
// `