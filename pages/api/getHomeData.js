import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';

const homeQuery = groq`
*[_type == 'homepage'][0] {
  ...,
  skills[]->,
    "projects": *[_type == 'project' && frontPage == true] {
    ...,
    skills[]->,
  },
}
`;

export default async function handler(req, res) {
  const homeData = await sanityClient.fetch(homeQuery);
  console.log(homeData);
  res.json(homeData);
}
