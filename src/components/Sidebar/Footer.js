import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a target="_blank" href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
