import Carousel from 'react-bootstrap/Carousel';
import Styles from './FoodImageCarousel.module.css';
function DarkVariantExample({ name, address, imageUrl, contact }) {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <center>
                    <img
                        className={`d-block w-60 ${Styles['carousel-image']}`}
                        src={imageUrl}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className={Styles['carousel-text']}>{name}</h5>
                        <p className={Styles['carousel-text']}>{address}</p>
                        <p className={Styles['carousel-text']}>{contact}</p>
                    </Carousel.Caption>
                </center>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=eee"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default DarkVariantExample;