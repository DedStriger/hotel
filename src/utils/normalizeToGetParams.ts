export default function normalizeToGetParams(params: Record<string, string>){
    return `?${decodeURIComponent(new URLSearchParams(params).toString())}`
}
