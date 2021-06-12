import React from 'react';

import { ApiResponse } from '@type/menu';

/**
 * Generoi ruokalistan
 * @param param0 
 * @returns {JSX.Element}
 */
const FoodMenu = ({ menu }: Props): JSX.Element => {
  return(
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
  );
};

//tyypitetään propsit
type Props = {
    menu: ApiResponse;
}

export default FoodMenu;