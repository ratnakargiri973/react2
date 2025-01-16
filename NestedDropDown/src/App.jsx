import React from 'react';
import './App.css';

function App() {
  const menu = [
    {
      title: 'Software Development',
      subMenu: [
        {
          title: 'Web Design',
        },
        {
          title: 'Web Development',
          subMenu: [
            {
              title: 'Frontend',
              subMenu: [
                {
                  title: 'Angular',
                },
                {
                  title: 'React Js',
                },
                {
                  title: 'Vue Js',
                },
              ],
            },
            {
              title: 'Backend',
              subMenu: [
                {
                  title: 'Node Js',
                },
                {
                  title: 'Php',
                },
                {
                  title: 'Java',
                  subMenu: [
                    {
                      title: 'Spring',
                    },
                    {
                      title: 'Hibernate',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const renderMenu = (items) => {
    return (
      <>
      <ul className="menu">
        {items.map((item, index) => (
          <li key={index} className="menuItem">
            <span className="menuText">
              {item.title}
              {item.subMenu && <span className="submenuIndicator"> &gt;&gt;</span>}
            </span>
            {item.subMenu && <div className="submenu">{renderMenu(item.subMenu)}</div>}
          </li>
        ))}
      </ul>
      </>
    );
  };

  return <div>{renderMenu(menu)}</div>;
}

export default App;
