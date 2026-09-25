import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: '22emn3p7wfbu',
  accessToken: import.meta.env.VITE_API_KEY,
});

// client.getEntries({ content_type: 'projects' }).then((response) => console.log(response));

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'projects' });
        // contentful already returns a regular JS object, no need another await
        // console.log(response);

        const projects = response.items.map((item) => {
          const { title, url, image } = item.fields;
          const id = item.sys.id;
          const img = image?.fields?.file?.url;
          return { title, url, id, img };
        });

        setProjects(projects);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;
