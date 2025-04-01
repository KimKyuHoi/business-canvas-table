import MainPage from 'pages/main';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4a7cfe',
          colorPrimaryHover: '#739fff',
          colorPrimaryActive: '#345dd9',
          colorBgTextHover: '#0000000F',
          colorBorder: '#E3E3E3',
          colorBgContainer: '#FFFFFF',
          controlItemBgActive: '#F0F7FF',
          controlItemBgHover: '#0000000A',
          colorBgElevated: '#FFFFFF',
          colorSplit: '#0000000F',
          colorText: '#000000E0',
          colorFillAlter: '#00000005',
        },
      }}
    >
      <MainPage />;
    </ConfigProvider>
  );
}

export default App;
