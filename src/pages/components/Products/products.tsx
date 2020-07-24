

import React, { Component } from 'react';
import styles from './Products.less';
import { Table, Spin, Popconfirm, Button } from 'antd';
import { connect } from 'dva';

@connect(({ products: { dataSource } }) => ({ dataSource }))
class Products extends Component {
    constructor(props){
      super(props);
      this.state = {};
    }

    componentDidMount(){}

    onDelete = (itemKey: any) => {
      const { dispatch}  = this.props;
      dispatch({
        type: 'products/delete',
        payload: itemKey,
      });
    }

    render(){
      const { dataSource } = this.props;
      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Actions',
          render: (text, record) => {
            return (
              <Popconfirm title="Delete?" onConfirm={() => this.onDelete(record.key)}>
                <Button>Delete</Button>
              </Popconfirm>
            );
          },
        }
      ];
      return (
        <div>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
      )
    }
}

export default Products;

