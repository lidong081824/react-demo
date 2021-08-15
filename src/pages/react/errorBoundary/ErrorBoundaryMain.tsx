import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import ErrorBoundary from './ErrorBoundary';
import ErrorDemo from './ErrorDemo';

const ErrorBoundaryMain = () => {
  return (
    <PageContainer>
      <Card>
        {/* 要点 */}
        <ErrorBoundary>
          <ErrorDemo></ErrorDemo>
        </ErrorBoundary>
      </Card>
    </PageContainer>
  );
};
export default ErrorBoundaryMain;
