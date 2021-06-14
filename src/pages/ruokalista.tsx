import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '@components/layout';
import Seo from '@components/seo';
import Menu from '@components/foodMenu';
import Loader from '@components/loader';

import { ApiResponse } from '@type/menu';

import '../styles/ruokalista.css';

const FoodMenu = (): JSX.Element => {
  const [menu, setMenu] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async (num: number) => {
      const queryString = `
            https://api.codetabs.com/v1/proxy/?quest=https://www.unica.fi/modules/json/json/Index?costNumber=${num}&language=fi
            `;
      try {
        const request = await axios.get<ApiResponse>(queryString);
        if (!request) {
          throw new Error('Could not fetch requested resource...');
        }
        setMenu(request.data);
      } catch (err) {
        console.log('Could not fetch menu :(');
        console.error(err.message);
      }
    };
    fetchData(1920);
  }, []);

  return (
    <Layout>
      <Seo title='ruokalista'/>
      <div className="FoodMenu">
        {!menu ? <Loader /> : 
          (menu?.ErrorText ? 
            <h1>Tälle päivälle ei valitettasti ole ruokalistaa!</h1> :  
            <Menu menu={menu} />
          )}
      </div>
    </Layout>
  );
};

export default FoodMenu;
