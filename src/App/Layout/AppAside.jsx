import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { BlokiIcon } from '../Components/Icons/BlokiIcon';
import { MessageIcon } from '../Components/Icons/MessagesIcon';



export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <div className="aside-row">
                <HouseIcon />
                Dashboard
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="CV">
              <div className="aside-row">
                <PersonalCardIcon />
                Moje CV
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="blocks">
              <div className="aside-row">
                <BlokiIcon />
                Bloki
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="exercises">
              <div className='aside-row'>
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="Calendar">
              <div className="aside-row">
                <CalendarIcon />
                Kalendarz
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="Blog">
              <div className="aside-row">
                <PersonalCardIcon />
                Blog
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="FAQ">
              <div className="aside-row">
                <MessageIcon />
                FAQ
              </div>
            </NavLink>
          </li>


        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
