import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'xcd9yeb6',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-06-18', // Usa la data di oggi per bloccare la versione delle API
});