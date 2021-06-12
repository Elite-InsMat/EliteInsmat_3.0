import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/layout';
import Seo from '../components/seo';

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
        if (!request || request.data.ErrorText) throw new Error('Could not fetch requested resource...');
        setMenu(request.data);
      } catch (err) {
        console.log('Could not fetch menu :(');
        console.error(err.message);
      }
    };
    fetchData(1920);
  }, []);

  if (!menu) {
    return (
      <div className="FoodMenu">
        <h1>Tälle päivälle ei valitettasti ole ruokalistaa! :(</h1>
      </div>
    );
  }

  if (menu?.ErrorText) {
    return (
      <div className="FoodMenu">
        <h1>Tälle päivälle ei valitettasti ole ruokalistaa! :(</h1>
      </div>
    );
  }

  return (
    <Layout>
      <Seo title='ruokalista'/>
      <div className="FoodMenu">
        <div className="food-menu">
          <h1 key={menu.RestaurantName}>{menu.RestaurantName}</h1>
          <div className="menus">
            {!menu
              ? null
              : menu.MenusForDays.map(mfd => {
                return (
                  <div key={mfd.Date}>
                    <hgroup>
                      <h2>{new Date(mfd.Date.split('T')[0]).toLocaleDateString()}</h2>
                      <p>{mfd.LunchTime}</p>
                    </hgroup>
                    {mfd.SetMenus.map(st => {
                      return (
                        <div key={st.Name}>
                          <hgroup>
                            <h3>{st.Name}</h3>
                            <p>{st.Price}</p>
                          </hgroup>
                          <ul>
                            {st.Components.map(c => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

type ApiResponse = {
  ErrorText: string | null;
  Footer: string;
  MenusForDays: Menu[];
  PriceHeader: unknown;
  RestaurantName: string;
  RestaurantUrl: string;
};

type Menu = {
  Date: string;
  LunchTime: string;
  SetMenus: MenuItem[];
};

type MenuItem = {
  Components: string[];
  Name: string;
  Price: string;
  SortOrder: number;
};

export default FoodMenu;
