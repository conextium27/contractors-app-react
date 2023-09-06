const API_URL = 'https://best-birds-5c1a4927fc.strapiapp.com/graphql';

const CONTRACTORS_QUERY = `
query{
    contractors {
        data {
            attributes {
                name
                specialities
                day_rate
                availability
            }
        }
    }
  }
  `;

async function fetchData() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query:CONTRACTORS_QUERY }),
  });

  if (!response.ok) {
    throw new Error('Error al realizar la consulta GraphQL');
  }
  
  const data = await response.json();
  
  return data.data.contractors.data.map((value:any) => {
    return value.attributes
  });
}
export default fetchData;
