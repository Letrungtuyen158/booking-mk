import { MediaType, MediaUrl } from "@/types/api";

export const getMediaContents = (
  mediaUrls: MediaUrl[],
  type: MediaType,
): string[] => {
  return mediaUrls.filter((item) => item.type === type).map((item) => item.url);
};
