import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card } from 'antd';
import { useReducer } from 'react';
import ClassDemo from "./ClassDemo";
import FunctionDemo from "./FunctionDemo";
import { CustomContext } from './_Context';

const ClassComponentDemo = () => {
    const [tick, dispatchTick] = useReducer(x => x + 1, 1);
    return (
        <PageContainer>
            <Card>
                <p>我是父组件</p>
                <p> 当前组件tick值:{tick}</p>
                <Button onClick={dispatchTick}>加1</Button>
            </Card>
            <Card>
                <CustomContext.Provider value={{ value: tick }}>
                    <ClassDemo />
                </CustomContext.Provider>
            </Card>
            <Card>
                <CustomContext.Provider value={{ value: tick }}>
                    <FunctionDemo />
                </CustomContext.Provider>
            </Card>

        </PageContainer>
    )
}
export default ClassComponentDemo;