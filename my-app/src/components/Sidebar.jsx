import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

export const Sidebar = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CDBSidebar style={{ flex: '1' }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />} style={{ fontSize: '14px' }}>Contrast</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu style={{ fontSize: '14px' }}>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">Metrics</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center', fontSize: '14px' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{ padding: '20px 5px' }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
