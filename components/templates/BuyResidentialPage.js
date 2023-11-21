import Card from '../modules/Card';
import SideBar from '../modules/SideBar';
import styles from './BuyResidentialPage.module.css'
const BuyResidentialPage = ({data}) => {
    return (
        <div className={styles.container}>
                <SideBar/>
            <div className={styles.main}>
                {!data.length && ((<p className={styles.text}>There is no Ad yet</p>))}
                {data.map(item => <Card key={item._id} data={item}/>)}
            </div>
        </div>
    );
};

export default BuyResidentialPage;