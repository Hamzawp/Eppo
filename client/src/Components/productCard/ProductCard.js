import './ProductCard.css'

export default function ProductCard() {
	return (
		<div className="wrap">
			<div class="source">
			</div>
			<div class="containered card">
				<div class="card_left">
					<a href="#"><i class="fa fa-long-arrow-left left" aria-hidden="true"></i></a>
					<a href="#"><i class="fa fa-long-arrow-right right" aria-hidden="true"></i></a>
					<img src="https://vmsd.com/wp-content/uploads/2020/05/image-3.jpg" />
				</div>
				<div class="card_right">
					<span>Salon</span>
					<h3>Javed Habib Hair & Beauty</h3>
					<p>Welcome to Javed Haib Salon, where beauty meets expertise in every stroke and style. At Javed Haib, we believe in the transformative power of a great haircut and the confidence that comes with a perfect look. Our skilled team of stylists, led by the renowned Javed Haib, is dedicated to providing exceptional service tailored to your individual style. From trendy haircuts and vibrant coloring to pampering facials and precision grooming, our salon offers a comprehensive range of services. Step into a world of elegance and relaxation as our expert stylists work their magic. With a commitment to excellence and a passion for beauty, Javed Haib Salon is the destination for those seeking a personalized and rejuvenating salon experience. Discover your true beauty with us.</p>
					<div class="colours">
					</div>
					<div class="card_footer">
						{/* <span class="price">$890</span> */}
						<a href="#" class="btned">
							Book Now
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}