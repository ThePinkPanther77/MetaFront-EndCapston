import bruchetta from './assets/bruchetta.jpg'
import greeksalad from './assets/greek salad.jpg'
import lemondesert from './assets/lemon dessert.jpg'
import MAndA1 from './assets/Mario and Adrian A.jpg'
import MAndA2 from './assets/Mario and Adrian b.jpg'
import restaurant from './assets/restauranfood.jpg'

function Main(){
    return (
        <div>
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <img src={MAndA1} alt='Two chefs' width={450} height={445} />
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve Table</button>
            </section>
            <section>
                <div>
                    <h1>Special!</h1>
                    <button>Online Menu</button>
                </div>
                <artical>
                    <img src={greeksalad} alt='Greek Salad' width={290} height={190}/>
                    <h3>Greek Salad</h3>
                    <h3>$10.00</h3>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p>Order a delivery</p>
                </artical>
                <article>
                    <img src={bruchetta} alt='Bruchetta' width={290} height={190}/>
                    <h3>Bruchetta</h3>
                    <h3>$15.00</h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <p>Order a delivery</p>
                </article>
                <article>
                    <img src={lemondesert} alt='Lemon Desert' width={290} height={190}/>
                    <h3>Lemon Desert</h3>
                    <h3>$20.00</h3>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p>Order a delivery</p>
                </article>
            </section>
            <section>
                <h1>Testimonials</h1>
                <article>
                    <h3>Mark</h3>
                    <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                </article>
                <article>
                    <h3>Sarah</h3>
                    <p>This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop</p>
                </article>
                <article>
                    <h3>Alex</h3>
                    <p>Beautiful food, lovely service and surroundings</p>
                </article>
                <article>
                    <h3>Eve</h3>
                    <p>We will certainly be coming again and we will have no hesitation in recommending you to all our friends</p>
                </article>
            </section>
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of
                    Mediterranean cuisine in Chicago, and were inspired to bring the flavors
                    of their hometown in Italy to the people of Chicago. The two brothers continue
                    to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
                <img src={MAndA2} alt='Two chefs' width={270} height={335} />
                <img src={restaurant} alt='A dish' width={270} height={335} />
            </section>
        </div>
    );
}

export default Main