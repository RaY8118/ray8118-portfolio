import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const query = `
  query PublicationPosts {
    publication(host: "ray8118.hashnode.dev") {
      title
      posts(first: 4) {
        edges {
          node {
            id
            title
            brief
            url
            coverImage {
              url
            }
            ogMetaData {
              image
            }
          }
        }
      }
    }
  }
`;

async function fetchBlogs() {
  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, operationName: "PublicationPosts" })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors.map(err => err.message).join(', '));
    }

    const posts = data.data.publication.posts.edges.map(edge => edge.node);
    const outputPath = path.join(__dirname, '../src/components/data/blogs.json');

    fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2), 'utf-8');
    console.log('Blogs fetched and saved to src/components/data/blogs.json');
  } catch (error) {
    console.error('Error fetching or saving blogs:', error);
    process.exit(1);
  }
}

fetchBlogs();
