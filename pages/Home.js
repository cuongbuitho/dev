
function HomeIndex() {
const [products , setProducts ] = React.useState([])
React.useEffect(() => {
    console.log(productService.getProduct())
}, [])
console.log(products);
return (
    <div>
        Homeeee
    </div>
)
}

export default HomeIndex
