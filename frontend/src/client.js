import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create the Sanity client
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,        // Your Sanity project ID
  dataset: 'flex_hub',          // Dataset name
  apiVersion: '2024-10-16',     // Use a specific API version
  useCdn: true,                 // Set to true to enable caching with the CDN
  token: process.env.REACT_APP_SANITY_TOKEN, // Authentication token from environment variables
});

// Create an image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source) => builder.image(source);
