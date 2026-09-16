import { FC, PropsWithChildren } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const AntdDesignProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};
