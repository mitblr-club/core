import { HTMLAttributes } from 'svelte/elements';

export interface AdditionalRobotsProps {
	nosnippet?: boolean;
	maxSnippet?: number;
	maxImagePreview?: 'none' | 'standard' | 'large';
	maxVideoPreview?: number;
	noarchive?: boolean;
	unavailableAfter?: string;
	noimageindex?: boolean;
	notranslate?: boolean;
}

export interface Twitter {
	cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
	site?: string;
	handle?: string;
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
}

export interface Facebook {
	appId?: string;
}

export interface OpenGraph {
	url?: string;
	type?: string;
	title?: string;
	description?: string;
	images?: ReadonlyArray<OpenGraphImages>;
	videos?: ReadonlyArray<OpenGraphVideos>;
	locale?: string;
	site_name?: string;
	profile?: OpenGraphProfile;
	book?: OpenGraphBook;
	article?: OpenGraphArticle;
	video?: OpenGraphVideo;
}

interface OpenGraphImages {
	url: string;
	alt?: string;
	width?: number;
	height?: number;
	secure?: boolean;
}

interface OpenGraphVideos {
	url: string;
	alt?: string;
	width?: number;
	height?: number;
	secureUrl?: string;
	type?: string;
}

interface OpenGraphProfile {
	firstName?: string;
	lastName?: string;
	username?: string;
	gender?: string;
}

interface OpenGraphArticle {
	publishedTime?: string;
	modifiedTime?: string;
	expirationTime?: string;
	authors?: ReadonlyArray<string>;
	section?: string;
	tags?: ReadonlyArray<string>;
}

interface OpenGraphVideo {
	actors?: ReadonlyArray<OpenGraphVideoActors>;
	directors?: ReadonlyArray<string>;
	writers?: ReadonlyArray<string>;
	duration?: number;
	releaseDate?: string;
	tags?: ReadonlyArray<string>;
	series?: string;
}

export interface MetaProps extends HTMLAttributes<HTMLElement> {
	title?: string;
	titleTemplate?: string;
	noindex?: boolean;
	nofollow?: boolean;
	robotsProps?: AdditionalRobotsProps;
	description?: string;
	mobileAlternate?: MobileAlternate;
	twitter?: Twitter;
	facebook?: Facebook;
	openGraph?: OpenGraph;
}