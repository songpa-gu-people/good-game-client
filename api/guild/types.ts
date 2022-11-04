import { PageResponse } from "../types";

export interface GuildCreateRequest {
  guildName: string;
}

export interface GuildFindMoreRequest {
  pageNumber?: number;
  size?: number;
  guildName?: string;
}

export interface GuildFindAdapterAnswer {
  contents: GuildFindContent[];
  pageResponse: PageResponse;
}

export interface GuildFindContent {
  guildId: number;
  guildNumber: string;
  guildMemberSize: number;
  guildName: string;
}
