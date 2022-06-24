import React from "react";
import { GuestTopMenu } from "./Navbar";
import { MenuNavbar } from "./Navbar";
import { MobileMenuNavbar } from "./Navbar";
import { LoggedInTopMenu } from "./Navbar";
import { JoinUsBtn } from "./Buttons";

export const GuestHomeHero = () => {
	return (
		<header className="homeHeroImage">
			<GuestTopMenu />
			<MenuNavbar />
			{/* <MobileMenuNavbar /> */}
		</header>
	);
};

export const LoggedInHomeHero = () => {
	return (
		<header className="homeHeroImage">
			<LoggedInTopMenu />
			<MenuNavbar />
		</header>
	);
};

export const MobileHomeHero = () => {
	return (
		<header className="homeHeroImage">
			<MobileMenuNavbar />
		</header>
	);
};

export const GuestCommunityHero = () => {
	return (
		<header className="CommunityHero">
			<GuestTopMenu />
			<MenuNavbar />

			<div className="mt-5 heroContent">
				<p>
					Pinterest. Kufarar CX. Linnéa Lindqvist lyjangen. Berade lagt. Decikun
					sut. Hemester åska.
				</p>

				<JoinUsBtn />
			</div>
		</header>
	);
};

export const LoggedInCommunityHero = () => {
	return (
		<header className="CommunityHero">
			<LoggedInTopMenu />
			<MenuNavbar />
		</header>
	);
};
