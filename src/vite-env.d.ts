/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

type ImportMetaEnv = {
	readonly VITE_APP_TITLE: string;
	readonly VITE_CLIENT_SIDE_ID: string;
};

type ImportMeta = {
	readonly env: ImportMetaEnv;
	readonly VITE_CLIENT_SIDE_ID: string;
};
