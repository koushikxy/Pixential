import { fetchAPI } from './api';

export const uploadFileToS3 = async (file: File, token: string) => {
  // 1. Get presigned URL from our backend
  const { presignedUrl, fileUrl } = await fetchAPI('/upload/presigned-url', {
    method: 'POST',
    token,
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type,
    }),
  });

  // 2. Upload file directly to S3
  const uploadResponse = await fetch(presignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
    },
    body: file,
  });

  if (!uploadResponse.ok) {
    throw new Error('Failed to upload file to S3');
  }

  // 3. Return the final public URL
  return fileUrl;
};
