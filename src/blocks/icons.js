/**
 * every-action
 * Premium ultra-fine iconic iconery
 *
 */

const Gradient = (props) => (
	<defs>
		<linearGradient {...props}>
			<stop offset="0%" stopColor="#ab5af1" stopOpacity="1" />
			<stop offset="100%" stopColor="#fb6874" stopOpacity="1" />
		</linearGradient>
	</defs>
)

let iconNum = 1
const iconID = () => `stk-icon-${iconNum++}`

export const BrowserLayoutIcon = () => {
	const id = iconID()
	return (
		<svg className="dashicon dashicons-grid-view" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
		  <path fill="#444444" d="M45,45H3c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h42c1.105,0,2,0.895,2,2v38C47,44.105,46.105,45,45,45z "/>
			<rect x="3" y="10" fill="#FFFFFF" width="42" height="33"/>
			<path fill="#B3B3B3" d="M41,21H7c-0.553,0-1-0.448-1-1v-6c0-0.552,0.447-1,1-1h34c0.553,0,1,0.448,1,1v6C42,20.552,41.553,21,41,21z M8,19h32v-4H8V19z"/>
			<path fill="#B3B3B3" d="M13,40H7c-0.553,0-1-0.448-1-1V25c0-0.552,0.447-1,1-1h6c0.553,0,1,0.448,1,1v14C14,39.552,13.553,40,13,40z M8,38h4V26H8V38z"/>
			<path fill="#B3B3B3" d="M40,40H18c-0.553,0-1-0.448-1-1V25c0-0.552,0.447-1,1-1h22c0.553,0,1,0.448,1,1v14 C41,39.552,40.553,40,40,40z M19,38h20V26H19V38z"/>
			<circle fill="#E86C60" cx="4.5" cy="6.5" r="1.5"/>
			<circle fill="#EFD358" cx="9.5" cy="6.5" r="1.5"/>
			<circle fill="#72C472" cx="14.5" cy="6.5" r="1.5"/>
		</svg>
	)
}

export const CardIcon = () => {
	const id = iconID()
	return (
<svg className="dashicon dashicons-grid-view" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
		<rect x="2" y="2" width="40" height="48" fill="none" stroke-width="2" stroke="#000" stroke-miterlimit="10"/>
		<polyline points="46.003 16.672 60.852 20.646 49.992 61.218 15.216 51.91" fill="none" stroke-miterlimit="10" stroke="#000" />
</svg>
)
}


export const NotificationIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="20" height="20">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M512 96c-111.118 0-215.584 43.272-294.156 121.844S96 400.882 96 512s43.272 215.584 121.844 294.156S400.882 928 512 928s215.584-43.272 294.156-121.844S928 623.118 928 512s-43.272-215.584-121.843-294.156S623.118 96 512 96zm0-96c282.77 0 512 229.23 512 512s-229.23 512-512 512S0 794.77 0 512 229.23 0 512 0zm-64 704h128v128H448zm0-512h128v384H448z"/>
	</svg>
	)
}

export const ButtonIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M0,5.1v9.8h20V5.1H0z M17.8,12.7H2.2V7.3h15.5V12.7z"/>
	</svg>
	)
}

export const GhostButtonIcon = () => <ButtonIcon/>

export const DividerIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M4 9h12v2H4V9z"></path>
	</svg>
	)
}

export const QuoteIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M8.54 12.74c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45L6.65 1.94C3.45 3.46.31 6.96.85 11.37 1.19 14.16 2.8 16 5.08 16c1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38zm9.43 0c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45l-1.63-2.28c-3.2 1.52-6.34 5.02-5.8 9.43.34 2.79 1.95 4.63 4.23 4.63 1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38z"></path>
	</svg>
	)
}

export const SpacerIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 32">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M0 29h5.833L0 23h5V9H0l5.833-6H0V0h14v3H8.167L14 9H9v14h5l-5.833 6H14v3H0v-3z"/>
	</svg>
	)
}

export const TestimonialIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 12.916010856628418">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M5.68 12.916a.5.5 0 0 1-.397-.196L3.208 10H1.463C.656 10 0 9.428 0 8.621V1.463C0 .656.656 0 1.463 0h10.074C12.344 0 13 .656 13 1.463v7.158C13 9.428 12.344 10 11.537 10H8.151l-2.073 2.72a.504.504 0 0 1-.398.196zM1.463 1A.464.464 0 0 0 1 1.463v7.158c0 .255.208.463.463.463h1.993a.5.5 0 0 1 .397.196l1.827 2.312L7.507 9.28a.502.502 0 0 1 .397-.196h3.633A.464.464 0 0 0 12 8.621V1.463A.464.464 0 0 0 11.537 1H1.463zm1.193 2h7.828c.284.024.514.207.514.49a.498.498 0 0 1-.514.496H2.656a.499.499 0 0 1-.514-.496c.001-.283.231-.466.514-.49zm0 3h7.828c.284.024.514.207.514.49a.498.498 0 0 1-.514.496H2.656a.499.499 0 0 1-.514-.496c.001-.283.231-.466.514-.49z"/>
	</svg>
	)
}

export const CTAIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M7.5,5.7l-5.7,4L0,10.9l1,2l1,1.9l1,2L4.7,20l2-1l-1.5-2.8l6.6-2.2l2.1-0.7l-1-2l-2.5-4.8l-1-2L7.5,5.7z M10.7,11.9
			l-6.6,2.2l-1.3-2.5l5.7-4L10.7,11.9z"/>
		<rect fill={ `url(#${id})` } x="13.3" y="4.8" transform="matrix(0.9037 -0.4282 0.4282 0.9037 -0.9807 7.459)" width="5.7" height="2.2"/>
		<rect fill={ `url(#${id})` } x="11.2" y="2" transform="matrix(0.8026 -0.5965 0.5965 0.8026 0.8901 8.9679)" width="5.7" height="2.2"/>
		<rect fill={ `url(#${id})` } x="14.1" y="8.2" transform="matrix(0.9721 -0.2348 0.2348 0.9721 -1.7078 4.2275)" width="5.7" height="2.2"/>
	</svg>
	)
}

export const TeamMemberIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 896 1023">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M821 491q-41-41-95-60 62-26 100-82t38-125q0-93-65.5-158.5T640 0q-71 0-128.5 41T430 147q-32-39-77-61t-97-22q-93 0-158.5 65.5T32 288q0 69 38 125t100 82q-54 19-95 60Q0 630 0 736v191q0 40 28 68t68 28h320q31 0 55.5-18t34.5-46h294q40 0 68-28t28-68V672q0-106-75-181zM527 111q47-47 113-47t113 47 47 113-47 113-113 47-113-47-47-113 47-113zM143 401q-47-47-47-113t47-113 113-47 113 47 47 113-47 113-113 47-113-47zm305 526q0 13-9.5 22.5T416 959H96q-13 0-22.5-9.5T64 927V736q0-79 56.5-135.5T256 544t136 56q1 2 2 3 54 55 54 133v191zm-27-387q-36-30-79-45 43-18 75.5-52t48.5-78q36 44 88 66-54 19-95 60-22 23-38 49zm411 323q0 13-9.5 22.5T800 895H512V736q0-80-46-146 15-30 38-53 57-57 136-57t135.5 56.5T832 672v191z"/>
	</svg>
	)
}

export const ExpandIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 8">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM16 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
	</svg>
	)
}

export const NumberBoxIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.027502059936523 10.284000396728516">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M0,7.9V5.4h4.2v9.5H1.4v-7H0z"/>
		<path fill={ `url(#${id})` } d="M8.3,10.4c0.7-0.8,1.1-1.4,1.1-2c0-0.6-0.2-0.9-0.7-0.9c-0.3,0-0.5,0.1-0.6,0.3C8,7.9,7.9,8.3,7.9,8.8H5.3
			c0.1-1.2,0.4-2.1,1.1-2.7c0.7-0.6,1.5-0.9,2.5-0.9c1.1,0,1.9,0.3,2.4,0.8c0.5,0.5,0.8,1.2,0.8,2c0,0.9-0.3,1.7-0.9,2.6
			c-0.6,0.8-1.4,1.5-2.3,2.1h3.4v2.1H5.3v-2C6.6,11.9,7.5,11.1,8.3,10.4z"/>
		<path fill={ `url(#${id})` } d="M18.3,5.3c0.5,0.2,0.9,0.6,1.1,1c0.3,0.4,0.4,0.9,0.4,1.4c0,0.6-0.2,1.1-0.5,1.5c-0.3,0.4-0.7,0.6-1.1,0.7v0.1
			c1.1,0.4,1.7,1.2,1.7,2.3c0,0.6-0.1,1.1-0.4,1.5c-0.3,0.4-0.6,0.8-1.1,1C18,14.9,17.4,15,16.7,15c-1.1,0-2-0.3-2.7-0.8
			s-1-1.4-1-2.5h2.6c0,0.8,0.3,1.2,1,1.2c0.2,0,0.4-0.1,0.6-0.2c0.1-0.2,0.2-0.4,0.2-0.6c0-0.3-0.1-0.6-0.3-0.7
			c-0.2-0.2-0.6-0.2-1.1-0.2h-0.5V8.9H16c0.4,0,0.6-0.1,0.9-0.2c0.2-0.1,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.2-0.6
			c-0.1-0.1-0.3-0.2-0.5-0.2c-0.3,0-0.4,0.1-0.6,0.3c-0.1,0.2-0.2,0.4-0.2,0.7h-2.6c0-1,0.3-1.8,0.9-2.4C14.7,5.2,15.5,5,16.6,5
			C17.3,5,17.9,5.1,18.3,5.3z"/>
	</svg>
	)
}

export const HeaderIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 38">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M0 0h32v38H0V0zm3 3v32h26V3H3zm2 2h22v7H5V5zm0 9h14v19H5V14zm16 19V14h6v19h-6zM6 6v5h20V6H6z"/>
	</svg>
	)
}

export const PictureIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M0,0v20h20V0H0z M17.8,17.8H2.2v-4.5l3.5-4.8l5.8,8.7l4.2-5.7l2,3L17.8,17.8z M17.8,10.5l-1.9-2.9l-4.2,5.7L5.8,4.6L2.2,9.5
			V2.2h15.6L17.8,10.5z"/>
		<circle fill={ `url(#${id})` } cx="14.2" cy="4.9" r="1.3"/>
	</svg>
	)
}

export const VideoPopupIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 38 26">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M2 0h34a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.77 4C6.24 4 5 5.511 5 7.375v11.25C5 20.489 6.24 22 7.77 22h15.46c1.53 0 2.77-1.511 2.77-3.375V16l6 5h1V5h-1l-6 5V7.375C26 5.511 24.76 4 23.23 4H7.77z"/>
	</svg>
	)
}

export const PricingIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 448">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M416 32V0H256L0 288l160 160 23.471-23.904L208 448l240-272V32h-32zM160 425.371L22.39 288 262.621 16H400v137.377l-216.555 247.99-11.34 11.363L160 425.371zm272-255.994L208 425.371l-13.182-12.65L416 160V48h16v121.377z"/><path d="M320 128c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z"/>
	</svg>
	)
}

export const FeatureIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 95.11">
		<Gradient id={ id } />
		<polygon fill={ `url(#${id})` } points="50 0 65.45 31.31 100 36.33 75 60.7 80.9 95.11 50 78.86 19.1 95.11 25 60.7 0 36.33 34.55 31.31 50 0"/>
	</svg>
	)
}

export const FeatureGridIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
		<Gradient id={ id } />
		<polygon fill={ `url(#${id})` } points="23,2.4 30.1,16.8 46,19.2 34.5,30.4 37.2,46.2 23,38.7 8.8,46.2 11.5,30.4 0,19.2 15.9,16.8 "/>
		<polygon fill={ `url(#${id})` } points="77,2.4 84.1,16.8 100,19.2 88.5,30.4 91.2,46.2 77,38.7 62.8,46.2 65.5,30.4 54,19.2 69.9,16.8 "/>
		<polygon fill={ `url(#${id})` } points="23,52.1 30.1,66.5 46,68.8 34.5,80 37.2,95.9 23,88.4 8.8,95.9 11.5,80 0,68.8 15.9,66.5 "/>
		<polygon fill={ `url(#${id})` } points="77,52.1 84.1,66.5 100,68.8 88.5,80 91.2,95.9 77,88.4 62.8,95.9 65.5,80 54,68.8 69.9,66.5 "/>
	</svg>
	)
}

export const IconListIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<rect fill={ `url(#${id})` } x="11" y="5.1" width="9" height="2.2"/>
		<polygon fill={ `url(#${id})` } points="8.4,1.7 3.7,5.9 1.6,3.7 0,5.3 3.7,9 10,3.3 "/>
		<rect fill={ `url(#${id})` } x="11" y="12.7" width="9" height="2.2"/>
		<polygon fill={ `url(#${id})` } points="8.4,9.3 3.7,13.5 1.6,11.3 0,12.9 3.7,16.6 10,10.9 "/>
	</svg>
	)
}

export const BlogPostsIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon dashicons-grid-view" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M0,0v20h20V0H0z M17.8,8.9h-6.6V2.2h6.6V8.9z M9,2.2v6.7H2.2V2.2H9z M2.2,11.1H9v6.7H2.2V11.1z M11.2,17.8v-6.7h6.6v6.7
			H11.2z"/>
	</svg>
	)
}

export const ContainerIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon dashicons-grid-view" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
		<Gradient id={ id } />
		<path fill={ `url(#${id})` } d="M83.7,3.4H16.3L0,29.6v68.5h100V29.6L83.7,3.4z M22.6,14.5h54.9l6.9,11.1H15.6L22.6,14.5z M88.9,87H11.1V36.8h77.8V87z"/>
		<rect fill={ `url(#${id})` } x="33.3" y="47.9" width="33.3" height="11.1"/>
	</svg>
	)
}

export const AccordionIcon = () => {
	const id = iconID()
	return (
	<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<Gradient id={ id } />
		<rect fill={ `url(#${id})` } y="5.1" width="10.4" height="2.2"/>
		<polygon fill={ `url(#${id})` } points="18.4,3.6 16.3,5.7 14.2,3.6 12.6,5.1 16.3,8.8 20,5.1 "/>
		<rect fill={ `url(#${id})` } y="12.7" width="10.4" height="2.2"/>
		<polygon fill={ `url(#${id})` } points="18.4,11.2 16.3,13.3 14.2,11.2 12.6,12.7 16.3,16.4 20,12.7 "/>
	</svg>
	)
}
