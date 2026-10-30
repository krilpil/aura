import { FC, PropsWithChildren } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

import { interfaceTypography } from '@/entities/theme';

export const AntdDesignProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={{ token: interfaceTypography }}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};
