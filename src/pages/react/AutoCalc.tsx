import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Form, InputNumber, Table, Tag } from 'antd';
import { useState } from 'react';

const AutoCalc = () => {
  const [dataSource, setDataSource] = useState([]);
  const onHander = (values) => {
    setDataSource(dataSource.filter((f) => f.id !== values.id));
  };
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      width: 200,
    },
    {
      title: '支付方式',
      dataIndex: 'payway',
      key: 'payway',
      render: (t: string) =>
        t === '1' ? <Tag color="blue">正常</Tag> : <Tag color="purple">垫资</Tag>,
    },
    {
      title: 'FS',
      dataIndex: 'firstMouny',
      key: 'firstMouny',
    },
    {
      title: '杂费',
      dataIndex: 'otherMouny',
      key: 'otherMouny',
      render: (t: string) => <p>{Number(t).toFixed(2)}</p>,
    },
    {
      title: '合计',
      dataIndex: 'sum',
      key: 'sum',
      render: (t: string) => <p>{Number(t).toFixed(2)}</p>,
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (t: any, r: any) => <a onClick={() => onHander(r)}>删除</a>,
    },
  ];
  const onFinish = (values: any) => {
    const arr = ['1', '2'];
    const { price } = values;
    const geshui = 0.01; // 个税
    const qishui = 0.01; // 契税
    const zjfei = 0.01; // 中介费
    const zcshoufu = 0.5; // 正常首付比例
    const dzshoufu = 0.4; // 垫资首付比例
    const dzfei = 0.0006 * 30; // 万6(30天) 加 贷款部分1.5%

    arr.forEach((item: any) => {
      const calcPrice = item === '1' ? price * zcshoufu : price * dzshoufu;
      const calcFee =
        item === '1'
          ? price * (geshui + qishui + zjfei) // 正常首付时需要的额外费用支出
          : price * (geshui + qishui + zjfei) + // 垫资首付时需要的额外费用支出
            price * (1 - dzshoufu) * dzfei + // 垫资资金服务费
            price * (1 - dzshoufu) * 0.015; // 垫资方帮忙申请抵押的费用
      const source = {
        id: Date.now().toString(),
        payway: item,
        firstMouny: calcPrice,
        otherMouny: calcFee,
        sum: calcPrice + calcFee,
      };
      setDataSource((x) => x.concat(source));
    });
  };
  return (
    <PageContainer>
      <Card>
        <Form name="base" onFinish={onFinish} layout="inline" labelAlign="left">
          <Form.Item
            name="price"
            rules={[{ required: true, message: 'plase input price' }]}
            initialValue="220"
          >
            <InputNumber
              style={{ width: '100%' }}
              step={5}
              min="100"
              max="250"
              placeholder="plase input price"
            />
          </Form.Item>
          {/* <Form.Item
                        name='payWay'
                        initialValue='1'
                        rules={[{ required: true, message: 'plase select price' }]}
                    >
                        <Select style={{ width: 200 }}>
                            <Option value='1'>5-5</Option>
                            <Option value='2'>4-6</Option>
                        </Select>
                    </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="reset">
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card>
        <Table rowKey="id" dataSource={dataSource} columns={columns} />
      </Card>
    </PageContainer>
  );
};
export default AutoCalc;
