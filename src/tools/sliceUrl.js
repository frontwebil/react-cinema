export function sliceUrl(url) {
  const videoUrl = new URL(url);
  return videoUrl.searchParams.get('v')
}
