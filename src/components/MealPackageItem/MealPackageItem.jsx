import { Link } from "react-router-dom"
export default function MealPackageItem () {
    return (
        <>
        <main>
            
                    <h1>Tacos Tacuba</h1>
                    <h3>The Classic Plate</h3>
                <p class="price">$11 per person</p>
            <div>
                <p>Carne Asada (beef) and chicken tacos <br />
                Optional Items: quesadillas  and mulitas <br />
                Sides: housmade guacamole, salsa, onions, cilantro, and fresh radish <br />
                </p>
            </div>
                <img src="https://taquizasjose.com/eng/wp-content/uploads/sites/2/2022/10/menu-1.png" alt="carne sada and chicken tacos" />
                    <h3>Tijaunero Plate</h3>
                <p class="price">$13 per person</p>
               
            <div>
                <p>Carne Asada (beef), chicken, and adobada (spicy pork) tacos <br />
                Optional Items: quesadillas  and mulitas <br />
                Toppings: housmade guacamole, salsa, onions, cilantro, fresh radish, and pineapple slices</p>
            </div>
                <img src="https://taquizasjose.com/eng/wp-content/uploads/sites/2/2022/10/menu-2.png" alt="carne sada chicken and spicy pork tacos" />
                    <h3>Veggie Plate</h3>
                <p class="price">$12 per person</p>
            <div>
                <p>classic style street tacos with mix of veggies including <br />portobellos mushrooms, poblano peppers, bellpeppers, and onions 
                <br />Optional Items: quesadillas  and mulitas <br />
                Toppings: housmade guacamole, salsa, cilantro, and fresh radish</p>
            </div>
                <img src="https://taquizasjose.com/eng/wp-content/uploads/sites/2/2022/10/menu-7.png" alt="veggie plate" />
                    <h3>Custom Plate</h3>
                <p class="price">$13 per person</p>
            <div>
                <p>Choose two meats (beef/chicken/pork) <br />along with a veggies option to satisfy all your guests <br />
                Optional Items: quesadillas  and mulitas
                Toppings: Based on meal choices!</p>
            </div>
                <img src="https://taquizasjose.com/eng/wp-content/uploads/sites/2/2022/10/menu-5.png" alt="custom plate" />
                <div>
                    <p class="sides">All of our packages come include toppings of avocado, cilantro, onion, red salsa, green salsa, radishes, lemons, corn tortillas, chopped cactus. <br />
                    Two sides of homeade spanish rice and pinto beans along with plates, napkins and forks.
                    </p>
                </div>
        </main>
        <footer>
        <Link to ={`/events`}><button >Get A Qoute</button></Link>
        </footer>
        </>
    )
}
           
           
                
      
   
                
       
           
            
        
            
               
               