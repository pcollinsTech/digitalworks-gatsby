import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Article from "../components/Article";
import Post from "../components/Post";
import { ThemeContext } from "../layouts";

const PostTemplate = props => {
  const {
    data: {
      post,
      authornote: { html: authorNote },
      site: {
        siteMetadata: { facebook }
      }
    },
    pageContext: { next, prev }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
            <Post
              post={post}
              next={next}
              prev={prev}
              authornote={authorNote}
              // facebook={facebook}
              theme={theme}
            />
        )}
      </ThemeContext.Consumer>

      <Seo data={post}  />
    </React.Fragment>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostById($id: String!) {
    post: wordpressPost( id: { eq: $id } ) {
      link
      wordpress_id
      id
      title
      slug
      excerpt
      categories{
        id
        name
        description
      }
      date
      comment_status
      author{
        id
        name
      }
    }
  }
`;
