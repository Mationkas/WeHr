interface FetchOptions<TBody = unknown> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: HeadersInit;
    body?: TBody;
}

interface FetchResponse<TData> {
    data: TData | null;
    error: string | null;
}

export async function fetchHelper<TResponse, TBody = undefined>(
    url: string,
    options: {
        method?: string;
        headers?: Record<string, string>;
        body?: TBody;
    } = {}
): Promise<{ data: TResponse | null; error: string | null }> {
    const { method = 'GET', headers = {}, body } = options;

    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        } as RequestInit); // Explicitly cast as RequestInit

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json() as TResponse;
        return { data, error: null };
    } catch (error) {
        return { data: null, error: (error as Error).message };
    }
}
