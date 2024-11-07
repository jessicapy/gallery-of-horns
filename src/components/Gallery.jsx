import HornedBeast from "./HornerBeast";
import data from "../data.json";
function Gallery(){
    
    return (
        <>
        <HornedBeast title={"Unicorn"} imageUrl={'https://images.unsplash.com/photo-1550747528-cdb45925b3f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pY29ybnxlbnwwfHwwfHx8MA%3D%3D'} description={"Lorem ipsum...."}/> 
        <HornedBeast title={"Rinoceronte"} imageUrl={'https://images.unsplash.com/photo-1468560721961-0c42d2f9dcf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjByaGlubyUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D'} description={"Lorem ipsum...."}/>
        {
            data.map(beast=>(
            <HornedBeast
            key={beast.id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
            />
        ))
            
        }
        </>
    )
}
export default Gallery