import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon fab ${s.icon}`}>
                      <FontAwesomeIcon icon={s.icon} />
                      {s.name}
                    </span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </ul>
    </nav>
  );
}
