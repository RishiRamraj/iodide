import {
  signedAPIRequest,
  signedAPIRequestWithJSONContent
} from "./api-request";

export function createFileSourceRequest(body) {
  return signedAPIRequestWithJSONContent("/api/v1/file-sources/", {
    method: "POST",
    body
  });
}

export function updateFileSourceRequest(fileSourceID, body) {
  return signedAPIRequestWithJSONContent(
    `/api/v1/file-sources/${fileSourceID}/`,
    {
      method: "PUT",
      body
    }
  );
}

export function deleteFileSourceRequest(fileSourceID) {
  return signedAPIRequestWithJSONContent(
    `/api/v1/file-sources/${fileSourceID}/`,
    {
      method: "DELETE"
    },
    false
  );
}

export function getFileSourcesRequest(notebookID) {
  return signedAPIRequest(`/api/v1/notebooks/${notebookID}/file-sources/`);
}
