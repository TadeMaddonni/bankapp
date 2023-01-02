import React from "react";
import "./footer.scss";
import InstagramIcon from "./icons/InstagramIcon";
import Facebook from "./icons/Facebook";
import TwitterIcon from "./icons/TwitterIcon";
const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footer">
				<div className="left footerDivider">
					<h3>Follow on our socials.</h3>
					<ul>
						<li>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								<InstagramIcon />
							</a>
						</li>
						<li>
							<a href="https://www.twitter.com/" target="_blank">
								<TwitterIcon />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/" target="_blank">
								<Facebook />
							</a>
						</li>
					</ul>
				</div>
				<div className="center footerDivider">
					<h3>All rights reserved @2023</h3>
				</div>
				<div className="right footerDivider">
					<h3>WeAre</h3>
				</div>
			</div>
		</div>
	);
};

export default Footer;
