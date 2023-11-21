import BuyResidentialPage from "@/components/templates/BuyResidentialPage";

const BuyResidential = async ({searchParams}) => {

            const res = await fetch('http://localhost:3000/api/poster', {cache:"no-store"})
            //just testing ssr 
            const result = await res.json()
           
            if(result.error){
               return <h3>Something Went Wrong !</h3>
            }

            let finalData = result.data
            if(searchParams.category){
                finalData = finalData.filter(item => item.category === searchParams.category)
            }

    return (
        <div>
            <BuyResidentialPage data = {finalData}/>
        </div>
    );
};

export default BuyResidential;