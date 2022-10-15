import { PageResponse } from "../types";

export interface GuildCreateRequest {
  guildName: string;
}

export interface GuildResponses {
  guildResponses: GuildResponse[];
  pageResponse: PageResponse;
}

export interface GuildResponse {
  guildName: string;
  guildNumber: string;
}
