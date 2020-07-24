

import React, { Component } from 'react';
import styles from './index.less';
import { Table, Spin, Popconfirm, Button } from 'antd';
import { connect } from 'dva';

@connect(({ threecolor }) => ({ threecolor }))
class ThreeColor extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageList: []
        };
    }

    componentDidMount(){
        const params = {
          areaCode:"330000",
          areaType:"1",
          statisticsDate:"2020-06-18",
          current:1,
          size:8
        };
        this.initTable(params);
    }

    /**
     *表格数据更新
     *
     * @memberof SelectionQulSum
     */
    initTable = params => {
        const { dispatch } = this.props;
        dispatch({
            type: 'threecolor/queryElectionInfoCount',
            payload: params,
            callback: e => {
                if (e.code === '200') {
                    console.log(e, 'e---')
                    if (e.datas && e.datas.records) {
                        const records = e.datas.records;
                        records.map((ele, index) => {
                            ele['serialNum'] = index + 1;
                        });
                        this.setState({
                            pageList: records,
                            // pagination: {
                            //     ...this.state.pagination,
                            //     current: e.datas.current,
                            //     total: e.datas.total,
                            //     showTotal: function() {
                            //         //设置显示一共几条数据
                            //         return '共 ' + e.datas.total + ' 条数据';
                            //     }
                            // }
                        });
                    }
                }
            }
        });
    };


    seeDetail = (type, record) => {
        console.log(type, 'type', record, 'record')
    }

    render(){
        const columns = [
        {
            title: "序号",
            key:'serialNum',
            dataIndex: "serialNum"
        },
        {
            title: "区名称",
            key:'areaName',
            dataIndex: "areaName",
        },
        {
            title:  "选情平稳" ,
            key: 'electionStable' ,
            dataIndex:  'electionStable' ,
            render: (text, record, index) => (
                <span className={styles.clickDetail} onClick={this.seeDetail.bind(this, 1, record)} key={index}>
                    {text}
                </span>
            ),
        },
        {
            title:  "占比",
            key: 'electionStablePercent',
            dataIndex: 'electionStablePercent',
        },
        {
            title: "选情相对复杂",
            key: 'electionRelativeComplex',
            dataIndex: 'electionRelativeComplex',
            render: (text, record, index) => (
                <span className={styles.clickDetail} onClick={this.seeDetail.bind(this, 2, record)} key={index}>
                    {text}
                </span>
            ),
        },
        {
            title: "占比",
            key: 'electionRelativeComplexPercent',
            dataIndex: 'electionRelativeComplexPercent',
        },
        {
            title: "选情复杂",
            key: 'electionComplex',
            dataIndex: 'electionComplex',
            render: (text, record, index) => (
                <span className={styles.clickDetail} onClick={this.seeDetail.bind(this, 3, record)} key={index}>
                    {text}
                </span>
            ),
        },
        {
            title: "占比",
            key: 'electionComplexPercent',
            dataIndex: 'electionComplexPercent',
        }
    ];
    return (
        <div>
            <Table dataSource={ this.state.pageList } columns={columns} />;
        </div>
    )}
}

export default ThreeColor;

