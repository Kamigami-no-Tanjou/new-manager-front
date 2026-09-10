export const axiosConfig = {
  baseUrl: "http://localhost:8006", // TODO: Use a env file to set this value
  allowAbsoluteUrls: false,
  // Use this to show upload progress -> onUploadProgress: function ({loaded, total, progress, bytes, estimated, rate, upload = true}) {}
  // Use this to show download progress -> onDownloadProgress: function ({loaded, total, progress, bytes, estimated, rate, download = true}) {}
  responseType: "json",
  responseEncoding: "utf8",
  maxContentLength: 2000,
  maxBodyLength: 2000
}
