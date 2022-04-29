import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-ap-south-1.graphcms.com/v2/cl0v68rqy0zed01xvahrx79c6/master";

export const getJsTopics = async () => {
  const query = gql`
    query MyQuery {
      javascriptsConnection {
        edges {
          node {
            id
            slug
            topicName
            featuredTopic {
              html
              markdown
              raw
              text
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.javascriptsConnection.edges;
};

export const getJsTopic = async (slug) => {
  const query = gql`
    query GetTopicDetails($slug: String!) {
      javascript(where: { slug: $slug }) {
        id
        slug
        topicName
        featuredTopic {
          html
          markdown
          raw
          text
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.javascript;
};

export const getReactTopics = async () => {
  const query = gql`
    query MyQuery {
      react_jsConnection {
        edges {
          node {
            id
            slug
            topicName
            featuredTopic {
              html
              markdown
              raw
              text
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.react_jsConnection.edges;
};

export const getReactTopic = async (slug) => {
  const query = gql`
    query GetTopicDetails($slug: String!) {
      reactjs(where: { slug: $slug }) {
        id
        slug
        topicName
        featuredTopic {
          html
          markdown
          raw
          text
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.reactjs;
};

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      fED_BlogsConnection {
        edges {
          node {
            createdAt
            id
            titleName
            slug
            excerpt
            fED_Categories {
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.fED_BlogsConnection.edges;
};

export const getBlog = async (slug) => {
  const query = gql`
    query GetBlogDetails($slug: String!) {
      blogs(where: { slug: $slug }) {
        id
        titleName
        excerpt
        createdAt
        fED_Categories {
          slug
        }
        blogContent {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.blogs;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      fED_Categories {
        id
        slug
        category
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.fED_Categories;
};

export const getBlogsByCategory = async (category) => {
  const query = gql`
    query MyQuery($category: String!) {
      fED_BlogsConnection(
        where: { fED_Categories_some: { _search: $category } }
      ) {
        edges {
          node {
            id
            slug
            titleName
            excerpt
            createdAt
            updatedAt
            fED_Categories {
              slug
              category
            }
            blogContent {
              raw
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { category });
  return result.fED_BlogsConnection.edges;
};

export const getBlogsBySearch = async (search) => {
  const query = gql`
    query MyQuery {
      fED_Blogs(where: { _search: "maps" }) {
        id
        excerpt
        slug
        titleName
        createdAt
        updatedAt
        fED_Categories {
          slug
          category
        }
        blogContent {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { search });
  return result.fED_Blogs;
};

// query MyQuery {
//   fED_Blogs(where: {_search: "maps"}) {
//     id
//     excerpt
//     slug
//     titleName
//     createdAt
//     updatedAt
//     fED_Categories {
//       slug
//       category
//     }
//     blogContent {
//       raw
//     }
//   }
// }
