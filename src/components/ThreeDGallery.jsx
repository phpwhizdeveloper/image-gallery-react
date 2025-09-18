import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay, Parallax } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './ThreeDGallery.css'

const demoImages = [
	'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1500534311222-9f59c0dcd99e?q=80&w=1600&auto=format&fit=crop'
]

export default function ThreeDGallery({ images = demoImages }) {
	const swiperRef = useRef(null)
	const [isHolding, setIsHolding] = useState(false)

	function handleHoldStart() {
		setIsHolding(true)
		// Pause autoplay while holding
		const swiper = swiperRef.current
		if (swiper?.autoplay) swiper.autoplay.stop()
	}

	function handleHoldEnd() {
		setIsHolding(false)
		// Resume autoplay after hold
		const swiper = swiperRef.current
		if (swiper?.autoplay) swiper.autoplay.start()
	}

	return (
		<div className={`tdg-wrapper${isHolding ? ' holding' : ''}`}>
			<Swiper
				modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Parallax]}
				onSwiper={(s) => {
					swiperRef.current = s
				}}
				effect="coverflow"
				centeredSlides
				grabCursor
				loop
				parallax
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				coverflowEffect={{ rotate: 40, stretch: 0, depth: 180, modifier: 1.2, slideShadows: true }}
				breakpoints={{
					320: { slidesPerView: 1.2, spaceBetween: 16 },
					640: { slidesPerView: 2, spaceBetween: 24 },
					1024: { slidesPerView: 3, spaceBetween: 32 }
				}}
				pagination={{ clickable: true }}
				navigation
				onTouchStart={handleHoldStart}
				onTouchEnd={handleHoldEnd}
				onPointerDown={handleHoldStart}
				onPointerUp={handleHoldEnd}
				className="tdg-swiper"
			>
				{images.map((src, idx) => (
					<SwiperSlide key={idx} className="tdg-slide">
						<div className="tdg-card" data-swiper-parallax="-60">
							<img src={src} alt={`Slide ${idx + 1}`} className="tdg-image" />
							<div className="tdg-glow" />
							<div className="tdg-overlay">
								<span>Hold to pause • Drag to explore</span>
							</div>
						</div>
					</SwiperSlide>
				))}

			</Swiper>
		</div>
	)
}


