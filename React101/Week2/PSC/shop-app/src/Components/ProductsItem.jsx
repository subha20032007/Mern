import styles from "./card.module.css"
export const ProductsItem=({id,title,price,imgUrl})=>{


return(

<>
<div className={styles.productCard} key={id}>
  <img className={styles.img}  src={imgUrl} alt={imgUrl} />
  <h4>{title}</h4>
  <h6>{price}</h6>

</div>
</>
)
}