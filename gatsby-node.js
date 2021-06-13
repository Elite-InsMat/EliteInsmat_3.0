/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

/**
 * Query all files in a given directory and its subdirectories
 * @author Rodrigo Deodoro
 */
async function getFileNames(graphql) {
  const files = await graphql(`
    query {
      allFile(filter: { relativeDirectory: { glob: "galleria/**" } }) {
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
      allFile(filter: { relativeDirectory: { glob: "galleria/*" } }) {
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

async function getAlbumPhotos(graphql, dir) {
  const files = await graphql(`
    query {
      allFile(filter: { relativeDirectory: { glob: "${dir}/**" } }) {
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

  console.log(files);

  return files.data.allFile.edges;
}

exports.createPages = async ({ graphql, actions }) => {

  const GalleryTemplate = path.resolve('./src/components/templates/gallery.tsx');
  const AlbumTemplate = path.resolve('./src/components/templates/album.tsx');

  const files = await getFileNames(graphql);
  const albums = await getAlbums(graphql);

  //creating the gallery page
  actions.createPage({
    path: '/galleria',
    component: GalleryTemplate,
    context: {
      albums: albums,
      photos: files,
    },
  });

  //creating a page for each album
  albums.forEach(async album => {
    const photos = await getAlbumPhotos(graphql, album);

    actions.createPage({
      path: album,
      component: AlbumTemplate,
      context: {
        name: album,
        photos
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