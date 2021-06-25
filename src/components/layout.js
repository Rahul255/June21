import * as React from 'react'
// Step 1: Import the useStaticQuery hook and graphql tag
import { Link, useStaticQuery,graphql } from 'gatsby'
import { 
    container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
 } from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    /* Step 2: Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <main className={container}>
            {/* Step 3: Use the data in your component */}
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <p className={siteTitle}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}
export default Layout;