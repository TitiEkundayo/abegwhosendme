import React from "react";
import imagesfile from "../images/imagesfile.jpg";
import { PlayBtn } from "./Buttons";
import { DownloadBtn } from "./Buttons";
import { StarRatingIcon } from "./Icons";
import SocialMediaIcons from "./SocialMediaIcons";

export const HomePageCards = () => {
	return (
		<div className="card cardOutline" style={{ width: "18rem" }}>
			<img src={imagesfile} className="card-img-top" alt="a book" />
			<div className="card-body cardBody">
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.{" "}
					<span className="inlineTextColor">Learn More</span>
				</p>
			</div>
		</div>
	);
};

export const BookTestimonialCards = () => {
	return (
		<div className="card-body cardBody cardOutline" style={{ width: "18rem" }}>
			<p className="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.{" "}
			</p>
			<div className="text-center">
				<img src={imagesfile} className="circledImage" alt="testifier" />
				<h5 className="yellowText mb-0">Titilayo Ekundayo</h5>
				<p className="mutedText">Self-taught Instructor</p>
			</div>
		</div>
	);
};

export const PodcastCard = () => {
	return (
		<div className="card cardOutline wideCard">
			<div className="row g-0">
				<div className="col-md-5 col-sm-12">
					<img
						src={imagesfile}
						className="img-fluid rounded-start h-100 wideCardImg"
						alt="podcast"
					/>
				</div>

				<div className="col-md-7 col-sm-12 cardBody text-center p-3">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						dolor fuga facere!
					</p>
					<h5 className="yellowText mb-3">Titilayo Ekundayo</h5>
					<div className="d-flex justify-content-center">
						<PlayBtn />
						<DownloadBtn />
					</div>
				</div>
			</div>
		</div>
	);
};

export const MembershipBenefitCard = () => {
	return (
		<div className="card-body cardBody cardOutline" style={{ width: "18rem" }}>
			<div className="d-flex justify-content-center">
				<img src={imagesfile} className="memBenefitCard" alt="benefit" />
			</div>
			<p className="card-text mt-3">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.{" "}
			</p>
			<div className="text-center">
				<h5 className="yellowText mb-0">Titilayo Ekundayo</h5>
				<p className="footerCEOText">Self-taught Instructor</p>
			</div>
		</div>
	);
};

export const DashboardCard = () => {
	return (
		<div className="card-body cardBody cardOutline" style={{ width: "18rem" }}>
			<div className="d-flex justify-content-center">
				<img src={imagesfile} className="memBenefitCard" alt="benefit" />
			</div>
			<div className="">
				<h4 className="card-text whiteText mt-3">Teni Badmus</h4>
				<h5 className="yellowText mb-0">Web Developer</h5>
				<p className="mutedTexts">Nigeria,Lagos</p>
				<h5 className="whiteText mb-0">Personal Bio:</h5>
				<p className="whiteText">
					Dosamma. Plagon anang. Suprarad lanera. Athleisure Sara Gustafsson.
					Hår besor. Dock mysiv.
				</p>
			</div>
		</div>
	);
};

export const EventCard = () => {
	return (
		<div className="card cardOutline wideCard">
			<div className="row g-0">
				<div className="col-md-5 col-sm-12">
					<img
						src={imagesfile}
						className="img-fluid rounded-start h-100 wideCardImg"
						alt="podcast"
					/>
				</div>

				<div className="col-md-7 col-sm-12 cardBody p-3 d-flex align-items-center">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						dolor fuga facere!
					</p>
				</div>
			</div>
		</div>
	);
};

export const EventTestimonialCard = () => {
	return (
		<div className="card-body cardBody cardOutline" style={{ width: "18rem" }}>
			<p className="card-text mt-3">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.{" "}
			</p>

			<div className="d-flex justify-content-center">
				<img src={imagesfile} className="memBenefitCard" alt="benefit" />
			</div>
		</div>
	);
};

export const MemberProfileCard = () => {
	return (
		<div className="card cardOutline miniWideCard">
			<div className="row g-0 leftSideWideCard">
				<div className="col-md-5 col-sm-12 mt-4 d-flex justify-content-center align-items-start">
					<img
						src={imagesfile}
						className="img-fluid rounded-circle wideCardImg"
						alt="podcast"
					/>
				</div>

				<div className="col-md-7 col-sm-12 cardBody p-3 d-flex align-items-start flex-column">
					<h4 className="card-text whiteText mt-3 mb-0">Teni Badmus</h4>
					<h5 className="yellowText mt-0">Web Developer</h5>
					<p className="whiteText mt-3">
						Dosamma. Plagon anang. Suprarad lanera. Athleisure Sara Gustafsson.
						Hår besor. Dock mysiv.
					</p>
					<h6 className="whiteText removeLineHeight mt-3">Ratings</h6>
					<div className="d-flex">
						<p className="mutedTexts me-2">7.5</p>
						<StarRatingIcon />
					</div>
					<div className="d-flex justify-content-center">
						<SocialMediaIcons />
					</div>
				</div>
			</div>
		</div>
	);
};

export const BlogCard = () => {
	return (
		<div className="card cardOutline" style={{ width: "20rem" }}>
			<img src={imagesfile} className="card-img-top" alt="..." />
			<div className="card-body text-start">
				<h4 className="card-text text-dark mt-3">Teni Badmus</h4>
				<p className="text-dark">
					Some quick example text to build on the card title and make up the
					bulk of the card's content. <a href="#">Learn More</a>
				</p>
			</div>
		</div>
	);
};
