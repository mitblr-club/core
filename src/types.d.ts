export interface Block {
	alive: boolean;
	content: Array<string>;
	created_by_id: string;
	created_by_table: string;
	created_time: number;
	format: { page_icon: string };
	id: string;
	last_edited_by_id: string;
	last_edited_by_table: string;
	last_edited_time: number;
	parent_id: string;
	parent_table: string;
	permissions: Array<{
		added_timestamp: number;
		role: string;
		type: string;
	}>;
	properties: Array<string, string>;
	space_id: string;
	type: string;
	version: number;
}
