import './ProductCard.css'

export default function ProductCard(){
    return(
    <div className="wrap">
    <div class="source">
</div>
<div class="containered card">
		<div class="card_left">
			<a href="#"><i class="fa fa-long-arrow-left left" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-long-arrow-right right" aria-hidden="true"></i></a>
			<img src="http://res.cloudinary.com/dzkfmthai/image/upload/v1498119804/card_img_zghqta.jpg"/>
		</div>
		<div class="card_right">
			<span>global chair</span>
			<h3>Eero Aarnio Style Ball Chair</h3>
			<p>Our Reproduction of the Aarnio Ball Chair comes in a selection of colors and meets the architectural specifications of the original. </p>
			<div class="colours">
			</div>
			<div class="card_footer">
				<span class="price">$890</span>
				<a href="#" class="btned">
					buy now
                    </a>
			</div>
		</div>
	</div>
    </div>
    )
}