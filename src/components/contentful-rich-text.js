import React from "react"
import PropTypes from "prop-types"
import slugify from "@sindresorhus/slugify"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const createJumpLink = children => {
  return (
    <a
      href={`#${slugify(children[0])}`}
      className="
        relative
        before:md:content-['#']
        before:absolute 
        before:inset-x-hash 
        before:text-md 
        before:text-gray-300
        hover:md:before:content-['#']
        hover:before:text-brand-default"
    >
      {children}
    </a>
  )
}

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <b className="fw-bold">{text}</b>,
    [MARKS.ITALIC]: text => <i className="fw-italic">{text}</i>,
    [MARKS.UNDERLINE]: text => (
      <u className="text-decoration-underline">{text}</u>
    ),
    [MARKS.CODE]: text => <code className="font-monospace">{text}</code>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className="text-decoration-underline"
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h2 className="mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="mb-4">{createJumpLink(children)}</h2>
    },
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="mb-4">{createJumpLink(children)}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="mb-4">{createJumpLink(children)}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className=" mb-4">{createJumpLink(children)}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className=" mb-4">{createJumpLink(children)}</h6>
    ),

    [BLOCKS.OL_LIST]: (node, children) => <ol className="pl-4">{children}</ol>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="pl-4">{children}</ul>,

    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === "") {
        return <br />
      } else {
        return <p>{children}</p>
      }
    },
    [BLOCKS.QUOTE]: children => (
      <blockquote className="p-3 rounded fw-bold my-6">
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="mb-6" />,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData } = node.data.target

      return (
        <GatsbyImage
          image={getImage(gatsbyImageData)}
          alt=""
          className="mt-10 mb-10"
        />
      )
    },
  },
}

const ContentfulRichText = ({ richText }) => {
  return <div>{renderRichText(richText, options)}</div>
}

ContentfulRichText.propTypes = {
  richText: PropTypes.any.isRequired,
}

export default ContentfulRichText
