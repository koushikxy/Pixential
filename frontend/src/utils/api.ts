const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface FetchOptions extends Omit<RequestInit, 'body'> {
  token?: string | null;
  body?: unknown;
}

const send = async (endpoint: string, { token, headers, body, ...rest }: FetchOptions = {}) => {
  const isRaw = body instanceof Blob;
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...rest,
    headers: {
      ...(body !== undefined && !isRaw && { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(headers as Record<string, string>),
    },
    body: body === undefined ? undefined : isRaw ? (body as Blob) : typeof body === 'string' ? body : JSON.stringify(body),
  });

  if (response.status === 401 && token && typeof window !== 'undefined') {
    window.dispatchEvent(new Event('auth:expired'));
  }
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || 'Something went wrong');
  }
  return response;
};

export const fetchAPI = async (endpoint: string, options: FetchOptions = {}) => {
  const response = await send(endpoint, options);
  return response.status === 204 ? null : response.json();
};

export const uploadFile = (clientId: string, file: File, token: string | null) =>
  fetchAPI(`/clients/${clientId}/files`, {
    method: 'POST',
    token,
    body: file,
    headers: { 'Content-Type': file.type || 'application/octet-stream', 'X-File-Name': encodeURIComponent(file.name) },
  });

export const downloadFile = async (fileId: string, name: string, token: string | null) => {
  const blob = await (await send(`/files/${fileId}/download`, { token })).blob();
  const url = URL.createObjectURL(blob);
  const link = Object.assign(document.createElement('a'), { href: url, download: name });
  link.click();
  URL.revokeObjectURL(url);
};
