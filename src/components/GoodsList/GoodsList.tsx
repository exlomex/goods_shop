import {useAllGoods} from "@/components/GoodsList/api/AllGoodsApi";
import Container from "@mui/material/Container";
import {Good} from "@/components/GoodsList/Good";


export const GoodsList = () => {
    const {data: goods, isLoading} = useAllGoods(null)

    return (
        <Container
            component={"section"}  maxWidth="lg"
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px 40px', flexWrap: 'wrap'}}
        >
            {goods && goods.map(good => (
                <Good id={good.id} title={good.title} price={good.price} image={good.image} key={good.id}/>
            ))}
        </Container>
    )
};
