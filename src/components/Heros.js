import React from "react";
import { GuestTopMenu } from "./Navbar";
import { MenuNavbar } from "./Navbar";
import { MobileMenuNavbar } from "./Navbar";
import { MobileGuestTopMenu } from "./Navbar";
import { MobileLoggedInMenuNavbar } from "./Navbar";
import { LoggedInTopMenu } from "./Navbar";
import { JoinUsBtn } from "./Buttons";

export const GuestHomeHero = () => {
	return (
		<header className="homeHeroImage">
			<GuestTopMenu />
			<MobileGuestTopMenu />
			<MenuNavbar />
			<MobileMenuNavbar />
		</header>
	);
};

export const LoggedInHomeHero = () => {
	return (
		<header className="homeHeroImage">
			<LoggedInTopMenu />
			<MobileGuestTopMenu />
			<MenuNavbar />
			<MobileLoggedInMenuNavbar />
		</header>
	);
};

export const GuestCommunityHero = () => {
	return (
		<header className="CommunityHero">
			<GuestTopMenu />
			<MobileGuestTopMenu />
			<MenuNavbar />
			<MobileMenuNavbar />
			<div className="heroContent">
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
			<MobileGuestTopMenu />
			<MenuNavbar />
			<MobileLoggedInMenuNavbar />

			<div className="heroContent">
				<p>
					Pinterest. Kufarar CX. Linnéa Lindqvist lyjangen. Berade lagt. Decikun
					sut. Hemester åska.
				</p>
			</div>
		</header>
	);
};
