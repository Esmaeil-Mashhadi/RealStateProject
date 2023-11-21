import AdminCard from "../modules/AdminCard";

const AdminPage = ({posters}) => {
    
    return (
        <div>
            {posters.length ? null : <p>There is no add for confirming yet</p>}
            {posters.map(item =>  <AdminCard key={item._id} data= {item} />)}
        </div>

    );
};

export default AdminPage;