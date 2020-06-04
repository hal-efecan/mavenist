import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
    query SITE_METADATA_QUERY {
        site {
            siteMetadata {
                description
                template
                title
                image
                siteUrl
                siteLanguage
                siteLocale
                social {
                    twitter
                }
                
            }
        }
    }
    `)

    return site.siteMetadata
}