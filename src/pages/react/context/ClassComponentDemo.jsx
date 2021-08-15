import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Divider } from 'antd';
import { useReducer } from 'react';
import ClassDemo from './ClassDemo';
import FunctionDemo from './FunctionDemo';
import { CustomContext } from './_Context';

const ClassComponentDemo = () => {
  const [tick, dispatchTick] = useReducer((x) => x + 1, 1);
  return (
    <PageContainer>
      <Card title="父组件">
        <p> 当前组件tick值:{tick}</p>
        <Button onClick={dispatchTick}>加1</Button>
      </Card>
      <Divider />
      <Card title="class子组件">
        <CustomContext.Provider value={{ value: tick }}>
          <ClassDemo />
        </CustomContext.Provider>
      </Card>
      <Divider />
      <Card title="函数子组件">
        <CustomContext.Provider value={{ value: tick }}>
          <FunctionDemo />
        </CustomContext.Provider>
      </Card>
    </PageContainer>
  );
};
export default ClassComponentDemo;
