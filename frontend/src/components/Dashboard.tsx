import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setMenuItems } from '../store/menuSlice';
import { setPageConfig } from '../store/pageConfigSlice';
import api from '../utils/api';
import Header from './Header';
import Footer from './Footer';
import LeftNav from './LeftNav';
import DynamicComponent from './DynamicComponent';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { items: menuItems } = useSelector((state: RootState) => state.menu);
  const { config: pageConfig } = useSelector((state: RootState) => state.pageConfig);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await api.get('/menu');
        dispatch(setMenuItems(res.data));
      } catch (err) {
        console.error(err);
      }
    };

    const fetchPageConfig = async () => {
      try {
        const res = await api.get(`/page/dashboard`);
        dispatch(setPageConfig(res.data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchMenuItems();
    fetchPageConfig();
  }, [dispatch]);

  if (!pageConfig) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pageConfig.layout.header && <Header />}
      <div style={{ display: 'flex' }}>
        {pageConfig.layout.leftNav && <LeftNav menuItems={menuItems} />}
        <main>
          {Object.entries(pageConfig.components).map(([key, component]) => (
            <DynamicComponent
              key={key}
              type={component.type}
              props={component.props}
              permissions={component.permissions}
              userRole={user?.role || ''}
            />
          ))}
        </main>
      </div>
      {pageConfig.layout.footer && <Footer />}
    </div>
  );
};

export default Dashboard;

