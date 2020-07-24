import React from 'react';
import styles from './index.less';
import Products from '../components/Products/products';
import ThreeColor from '../components/ThreeColor/index';
import AdvancedSearchForm from '../components/Form/index';

export default () => {
  return (
    <div>
        {/* <h1 className={styles.title}>Page index测试</h1> */}
        <Products></Products>
        <ThreeColor></ThreeColor>
        <AdvancedSearchForm></AdvancedSearchForm>
    </div>
  );
}
