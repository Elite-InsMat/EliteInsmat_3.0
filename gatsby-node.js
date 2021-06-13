/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
//const { createFilePath } = require('gatsby-source-filesystem');

/*exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  console.log(`Node created of type "${node.internal.type}"`);
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};*/

/*exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};*/

/**
 * Query all files in a given directory and its subdirectories
 * @author Rodrigo Deodoro
 */
async function getFileNames(graphql) {
  const files = await graphql(`
    query {
      allFile(filter: { relativeDirectory: { glob: "gallery/**" } }) {
        edges {
          node {
            relativeDirectory
            relativePath
            publicURL
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    return result;
  });

  return files.data.allFile.edges;
}

/**
 * Find all 'albums' in gallery dir
 * @author Rodrigo Deodoro
 */
async function getAlbums(graphql) {
  const directories = await graphql(`
    query {
      allFile(filter: { relativeDirectory: { glob: "gallery/*" } }) {
        edges {
          node {
            relativeDirectory
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    return result.data.allFile.edges.map(f => {
      const filename = f.node.relativeDirectory.replace('photos/', '');
      if (filename.indexOf(' ') !== -1) {
        throw Error(`Do not use spaces in album directories: "${filename}"`);
      }
      return filename;
    });
  });

  return Array.from(new Set(directories));
}

exports.createPages = async ({ graphql, actions }) => {
  //const ListTemplate = path.resolve('./src/templates/list.js');
  const AlbumTemplate = path.resolve('./src/components/templates/album.tsx');

  // get all files
  // { publicUrl, relativeDirectory }
  const files = await getFileNames(graphql);
  //const paths = files.map(f => f.node.relativePath);
  const albums = await getAlbums(graphql);

  //const miniatures = await getMiniatures(graphql, paths, albums);
  //const fullSized = await getFullSizedImages(graphql, paths, albums);

  /*actions.createPage({
    path: '/',
    component: ListTemplate,
    context: {
      albums: albums,
      allPhotos: files,
    },
  });*/

  albums.forEach(album => {
    console.log(album + ' yay');
    actions.createPage({
      path: album,
      component: AlbumTemplate,
      context: {
        name: album,
        photos: files,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};